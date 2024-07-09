export interface User {
    name: string;
    email: string;
    password: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}
