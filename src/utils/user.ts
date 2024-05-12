import jwt from "jsonwebtoken";

export class User {
    getParsedJWT() {
        const accessToken = localStorage.getItem('access_token') ?? '';
        try {
            const decoded = jwt.decode(accessToken);
            return decoded;
        } catch (error) {
            console.error('Error decoding JWT:', error);
            return null;
        }
    }
    getRole() {
        const user = this.getParsedJWT() as any;
        if (user) {
            return user.role
        }
        return null;
    }
    getName() {
        const user = this.getParsedJWT() as any;
        if (user) {
            return user.unique_name
        }
        return null;
    }
}