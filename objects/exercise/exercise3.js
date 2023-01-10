
let address1 = new Address('Saunders', 'New York', '11374');
let address2 = new Address('Saunders', 'New York', '11374');
let address3 = address1;

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    return this;
}
// === : have same reference ?

function areEqual(address1, address2) {
    if(Object.keys(address1).length !== Object.keys(address2).length)
        return false;
    for(let key in address1) {
        if(address1[key] !== address2[key])
            return false;
    }
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}

const areEqualAddress = areEqual(address1, address2);
console.log(areEqualAddress);
const areSameAddress = areSame(address1, address2);
console.log(areSameAddress);

console.log(areSame(address3, address1));