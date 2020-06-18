import { Company } from "./company.factory";
import { Pass } from "../models/pass.model";
import { StatePass } from "../models/state-pass.model";

export class CompanyStateBus implements Company {

    passEmitter(origin: string, destiny: string, departureDate: Date): Pass {
        return new StatePass(origin, destiny, departureDate);
    }

}