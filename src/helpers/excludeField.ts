export function exclude<User, Key extends keyof User>(
  users: User | User[] | null,
  keys: Key[]
): (Omit<User, Key> | null)[] | null {
  if (users === null) return null;

  if (Array.isArray(users)) {
    return users.map(user => {
      return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
      ) as Omit<User, Key>;
    });
  } else {
    return [
      Object.fromEntries(
        Object.entries(users).filter(([key]) => !keys.includes(key))
      ) as Omit<User, Key>,
    ];
  }
}
