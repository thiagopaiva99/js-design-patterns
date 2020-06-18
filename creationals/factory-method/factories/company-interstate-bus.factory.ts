import { Company } from "./company.factory";
import { Pass } from "../models/pass.model";
import { InterstatePass } from "../models/interstate-pass.model";

export class CompanyInterstateBus implements Company {

    passEmitter(origin: string, destiny: string, departureDate: Date): Pass {
        return new InterstatePass(origin, destiny, departureDate);
    }

}