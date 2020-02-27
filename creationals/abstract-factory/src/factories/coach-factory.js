import Coach from '../models/coach'

export default class CoachFactory {
    constructor() {}

    create(properties) {
        return new Coach(properties)
    }
}