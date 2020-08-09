export abstract class Note {

    clone(): Note {
        return {
            ...this
        }
    }

    abstract draw(): void;

}