import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { IUserLogin, IUserLoginResonse } from '../user/user.interface';

const signupUser = async (payload: User): Promise<User> => {
  const { name, email, password, role, contactNo, address, profileImg } =
    payload;

  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );

  const result = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      contactNo,
      address,
      profileImg,
    },
  });
  return result;
};

// login service
const loginUser = async (payload: IUserLogin): Promise<IUserLoginResonse> => {
  const { email, password } = payload;

  // check if the user exists
  const isUserExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  }
  const { email: userEmail, role } = isUserExists;

  const isPasswordMached = async function (
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(givenPassword, savedPassword);
  };

  // check if password is matched
  if (
    isUserExists.password &&
    !(await isPasswordMached(password, isUserExists.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password');
  }

  // generate access token
  const accessToken = jwtHelpers.generateToken(
    { userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  signupUser,
  loginUser,
};