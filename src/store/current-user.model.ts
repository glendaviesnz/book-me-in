export enum UserRoles {
  admin = 'admin'
}
export interface ICurrentUser {
  name: string;
  email: string;
  photoURL?: string;
  loading?: true;
  roles?: UserRoles[];
}
