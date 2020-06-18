export interface Pass {

    origin: string;
    destiny: string;
    departureDate: Date;

    getDetails: () => string;

}