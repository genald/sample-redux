export interface User {
    id       : string
    name     : string
    email    : string
    birthdate: string
}

export interface SamplePage {
    users?: User[]
}

export const initialState: SamplePage = {
    users: []
}