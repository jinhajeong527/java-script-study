// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}
const address1 = createAddress('Saunders', 'New York', '11374');
console.log(address1);

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    return this;
}
const address2 = new Address('Saunders', 'New York', '11374');
console.log(address2);