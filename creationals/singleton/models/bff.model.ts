export default class Bff {

    version: string = 'v1';
    stack: string = 'node';

    private static instance: Bff = null;

    private constructor({ version, stack }) {
        this.version = version;
        this.stack = stack;
    }

    static getInstance(data?): Bff {
        if (!Bff.instance) {
            Bff.instance = new Bff(data)
        }

        return Bff.instance;
    }
    
}