const addressesData = require("../data/address")

class Addresses {
    constructor (data) {
        this.id = data.id;
        this.street = data.street;
        this.postcode = data.postcode;
    }

    static get all() {
        const address = addressesData.map((address) => new Addresses(address))
        return address;
    }

    static findById(id) {
        const addressData = addressesData.filter((address) => address.id === id)[0];
        const address = new Addresses(addressData)
        return address;
    }

    static create (address) {
        const newAddressId = addressesData.length + 1;
        const newAddress = new Addresses({id : newAddressId, ...address})
        addressesData.push(newAddress);
        return newAddress;
    }

    destroy () {
        const address = addressesData.filter((address) => address.id === this.id)[0];
        addressesData.splice(addressesData.indexOf(address), 1)
    }
}

module.exports = Addresses
