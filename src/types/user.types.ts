export type UserModel = {
    id: string,
    username: string,
    password?: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNubmer: string,
    hubId: string,
    hubName: string,
    userRoles: Array<string>,
    postalCode: string,
    address: string
}

export type UserRole = {
    name: string,
    id: string
}
export type UserTypeResponse = {
    password: string,
    username: string
}