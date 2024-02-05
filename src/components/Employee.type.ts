export interface IEmployee {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export const userEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: "Jo`rabek",
        lastName: "Egamov",
        email: "egamovj90@gmail.com",
    },
]