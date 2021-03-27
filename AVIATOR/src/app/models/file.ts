import { pilot } from "./pilot";
import { user } from "./user";

export interface file
{
    pilot: pilot
    uploader: user
    fileURL: string
}