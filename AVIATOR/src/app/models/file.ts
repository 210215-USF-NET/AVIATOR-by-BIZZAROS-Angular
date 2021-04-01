import { pilot } from "./pilot";
import { user } from "./user";

export interface file
{
    id: number,
    pilot: pilot,
    PilotID: number,
    uploader: user,
    UploaderID: number,
    fileURL: string,
    fileName: string,
    fileDescription: string,

}