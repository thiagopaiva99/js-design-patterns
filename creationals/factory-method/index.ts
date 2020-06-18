import { CompanyInterstateBus } from "./factories/company-interstate-bus.factory"
import { Company } from "./factories/company.factory";
import { CompanyStateBus } from "./factories/company-state-bus.factory";
import { Pass } from "./models/pass.model";

export const start = () => {
    const interstateBusCompany: Company = new CompanyInterstateBus();
    const stateBusCompany: Company = new CompanyStateBus();

    const passToFloripa: Pass = interstateBusCompany.passEmitter('Porto Alegre', 'Floripa', new Date());
    const passToGramado: Pass = stateBusCompany.passEmitter('Porto Alegre', 'Gramado', new Date());

    console.log(passToFloripa.getDetails())
    console.log(passToGramado.getDetails());
}

start();