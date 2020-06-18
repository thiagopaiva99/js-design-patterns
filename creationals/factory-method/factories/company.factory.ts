import { Pass } from "../models/pass.model";

export interface Company {

    passEmitter: (origin: string, destiny: string, departureDate: Date) => Pass;

}