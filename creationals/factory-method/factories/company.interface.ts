import { Pass } from "../models/pass.interface";

export interface Company {

    passEmitter: (origin: string, destiny: string, departureDate: Date) => Pass;

}