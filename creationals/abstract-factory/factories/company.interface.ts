import { StatePass } from "../models/state-pass.model";
import { InterstatePass } from "../models/interstate-pass.model";

export interface ICompany {

    statePassEmitter: (origin: string, destiny: string, departureDate: Date) => StatePass;

    interstatePassEmitter: (origin: string, destiny: string, departureDate: Date) => InterstatePass;

}