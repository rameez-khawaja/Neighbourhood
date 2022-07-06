
const housesData = require("../data/house")

class Houses {
    constructor (data) {
        this.id = data.id;
        this.street = data.street;
        this.owner = data.owner;
    }

    static get all() {
        const house = housesData.map((house) => new Houses(house))
        return house;
    }

    static findById(id) {
        const houseData = housesData.filter((house) => house.id === id)[0];
        const house = new Houses(houseData)
        return house;
    }

    static create (house) {
        const newHouseId = housesData.length + 1;
        const newHouse = new Houses({id : newHouseId, ...house})
        housesData.push(newHouse);
        return newHouse;
    }

    destroy () {
        const house = housesData.filter((house) => house.id === this.id)[0];
        housesData.splice(housesData.indexOf(house), 1)
    }
}

module.exports = Houses
