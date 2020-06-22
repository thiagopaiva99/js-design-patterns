import { CompanyFactory } from "./factories/company.factory";
import { ICompany } from "./factories/company.interface";
import { StatePass } from "./models/state-pass.model";
import { InterstatePass } from "./models/interstate-pass.model";

export const start = () => {
    const busCompany: ICompany = new CompanyFactory();

    const passToFloripa: InterstatePass = busCompany.interstatePassEmitter('Porto Alegre', 'Floripa', new Date());
    const passToGramado: StatePass = busCompany.statePassEmitter('Porto Alegre', 'Gramado', new Date());

    console.log(passToFloripa.getDetails())
    console.log(passToGramado.getDetails());
}

start();