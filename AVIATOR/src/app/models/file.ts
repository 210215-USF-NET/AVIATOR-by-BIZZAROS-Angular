import { pilot } from "./pilot";
import { user } from "./user";

export interface file
{
    ID: number,
    Pilot: pilot,
    PilotID: pilot["id"],
    Uploader: user,
    UploaderID: user["id"],
    FileURL: string,
    FileName: string,
    FileDescription: string,

}