export enum UserRoles {
  admin = 'admin'
}

export interface CurrentUser {
  name: string;
  email: string;
  photoURL?: string;
  loading?: boolean;
  roles?: UserRoles[];
}
