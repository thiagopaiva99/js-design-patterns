import { Company } from "./company.interface";
import { Pass } from "../models/pass.interface";
import { InterstatePass } from "../models/interstate-pass.model";

export class CompanyInterstateBus implements Company {

    passEmitter(origin: string, destiny: string, departureDate: Date): Pass {
        return new InterstatePass(origin, destiny, departureDate);
    }

}