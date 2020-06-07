import Bff from "./bff.model";

export default class Frontend {

    frontendName: string;
    bff: Bff;

    constructor({ frontendName, bff}) {
        this.frontendName = frontendName;
        this.bff = bff;
    }

}