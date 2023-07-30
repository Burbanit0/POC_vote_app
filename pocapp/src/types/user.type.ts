export interface IUser {
    _id?: any | null,
    username?: string | null,
    email?: string,
    password?: string,
    roles?: Array<string>
  }

export type UserContextType = {
  currentUser: IUser;
  // setCurrentUser(user: IUser): void;
  logOut(): void;
  // updateUser: (id: number) => void;
};