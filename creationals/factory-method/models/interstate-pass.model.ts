import { Pass } from "./pass.interface";

export class InterstatePass implements Pass {

    origin: string;
    destiny: string;
    departureDate: Date;

    constructor(origin: string, destiny: string, departureDate: Date) {
        this.origin = origin;
        this.destiny = destiny;
        this.departureDate = departureDate;
    }

    getDetails(): string {
        return `
            Interstate Pass
            Origin: ${this.origin}
            Destiny: ${this.destiny}
            Departure Date: ${this.departureDate}
        `;
    }
}