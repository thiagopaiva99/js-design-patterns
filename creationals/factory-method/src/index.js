import Factory from './factories/factory'

const run = () => {
    const employeeTypes = []
    
    const factory = new Factory()
    
    employeeTypes.push(factory.createEmployee({ type: 'fulltime' }))
    employeeTypes.push(factory.createEmployee({ type: 'clt' }))
    
    employeeTypes.forEach(employeeType => employeeType.greeting())
}

run()