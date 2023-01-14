export default interface IUser {
    _id?: any | null,
    username?: string | null,
    email?: string,
    password?: string,
    roles?: Array<string>
  }