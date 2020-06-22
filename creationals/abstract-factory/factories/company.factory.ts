import { ICompany } from "./company.interface";
import { InterstatePass } from "../models/interstate-pass.model";
import { StatePass } from "../models/state-pass.model";

export class CompanyFactory implements ICompany {
    
    statePassEmitter(origin: string, destiny: string, departureDate: Date): StatePass {
        return new StatePass(origin, destiny, departureDate);
    }
   
    interstatePassEmitter(origin: string, destiny: string, departureDate: Date): InterstatePass {
        return new InterstatePass(origin, destiny, departureDate);
    };

}