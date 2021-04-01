import { user } from "./user";
export interface script
{
    id: number
    scriptwriter: user,
    scriptwriterID: number,
    pilotID: number,
    scriptURL: string
}
