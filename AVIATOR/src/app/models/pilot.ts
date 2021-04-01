import { file } from "./file";
import { scene } from "./scene";
import { script } from "./script";
import { user } from "./user";
export interface pilot 
{
    id: number,
    producer: user
    producerID: number
    pilotName: string
    pilotDescription: string
    script: script
    scenes: scene[]
    files: file[]
}
