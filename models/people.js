// model for dealing with the data

const peopleData = require("../data/people")

class People {
    constructor (data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.noOfPeople = data.noOfPeople;
    }

    static get all() {
        const person = peopleData.map((person) => new People(person))
        return person;
    }

    static findById(id) {
        const personData = peopleData.filter((person) => person.id === id)[0];
        const person = new People(personData)
        return person;
    }


    static create (person) {
        const newPersonId = peopleData.length + 1;
        const newPerson = new People({id : newPersonId, ...person})
        peopleData.push(newPerson);
        return newPerson;
    }

    destroy () {
        const person = peopleData.filter((person) => person.id === this.id)[0];
        peopleData.splice(peopleData.indexOf(person), 1)
    }
}

module.exports = People
