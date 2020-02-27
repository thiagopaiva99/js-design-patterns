import Dev from '../models/dev'

export default class DevFactory {
    constructor() {}

    create(properties) {
        return new Dev(properties)
    }
}