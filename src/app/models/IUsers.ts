export interface IUser {
    id: string
    name: string
    email: string
    password: string
    role?: 'customer' | 'admin'
}

export interface ICreateUser extends Omit<IUser, 'id'> { }