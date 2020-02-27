import DevFactory from './factories/dev-factory'
import CoachFactory from './factories/coach-factory'

const run = () => {
    const persons = []

    const devFactory = new DevFactory()
    const coachFactory = new CoachFactory()
    
    persons.push(devFactory.create({ name: 'Thiago' }))
    persons.push(devFactory.create({ name: 'Adrian' }))
    persons.push(devFactory.create({ name: 'Tarzan' }))
    persons.push(coachFactory.create({ name: 'Guerra' }))
    persons.push(coachFactory.create({ name: 'Inácio' }))
    persons.push(coachFactory.create({ name: 'Marcelo' }))
    
    persons.forEach(person => person.greeting())
}

run()