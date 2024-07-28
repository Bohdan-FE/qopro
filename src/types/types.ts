export interface User {
    address: string | null;
    balance: string | null;
}

export interface UserState {
    user: User;
}

export interface Store {
    user: UserState
}

export interface Data {
    name: string,
    address: string
}
