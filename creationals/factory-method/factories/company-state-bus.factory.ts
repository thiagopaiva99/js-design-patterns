import { Company } from "./company.interface";
import { Pass } from "../models/pass.interface";
import { StatePass } from "../models/state-pass.model";

export class CompanyStateBus implements Company {

    passEmitter(origin: string, destiny: string, departureDate: Date): Pass {
        return new StatePass(origin, destiny, departureDate);
    }

}