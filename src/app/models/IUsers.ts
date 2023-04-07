export interface IUser {
    id: string
    name: string
    email: string
    password: string
    role?: 'customer' | 'admin'
    avatar: string
}

export interface ICreateUser extends Omit<IUser, 'id'> { }