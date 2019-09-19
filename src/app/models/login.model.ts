export interface Login {
    username: string;
    email: string;
    password: string;
}

export interface User {
    pk: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}
