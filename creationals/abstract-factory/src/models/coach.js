export default class Coach {
    constructor({ name }) {
        this.name = name
    }

    greeting () {
        console.log(`Hello! I'm ${this.name} - Coach`)
    }
}