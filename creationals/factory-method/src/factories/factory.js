import FullTime from '../models/full-time'
import CLT from '../models/clt'

export default class Factory {
    constructor() {}

    getEmployeeType(type) {
        const types = {
            'fulltime': new FullTime(),
            'clt': new CLT()
        }

        return types[type]
    }

    createEmployee({ type }) {
        const employee = this.getEmployeeType(type)

        employee.greeting = () => console.log(`${employee.type} rates ${employee.hourly}/hour`)

        return employee
    }
}