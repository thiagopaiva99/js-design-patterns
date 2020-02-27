export default class Dev {
    constructor ({ name }) {
        this.name = name
    }

    greeting () {
        console.log(`Hello! I'm ${this.name} - Dev`)
    }
}