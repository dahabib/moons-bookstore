// Exclude keys from user or array of users
export function exclude<User, Key extends keyof User>(
  users: User[] | null,
  keys: Key[]
): (Omit<User, Key> | null)[] | null {
  if (users === null) return null;

  return users.map(user => {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !keys.includes(key))
    ) as Omit<User, Key>;
  });
}
