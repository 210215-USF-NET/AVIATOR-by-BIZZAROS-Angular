import { pilot } from "./pilot";
export interface user
{
    FirstName: string,
    LastName: string,
    Email: string,
    PhoneNumb: number,
    ID: number,
    pilots: pilot[]
}