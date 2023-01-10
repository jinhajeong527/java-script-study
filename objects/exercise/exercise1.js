const address = {
    street : 'Saunders',
    city: 'New York',
    zipCode: '11374'
}

const showAddress = (address) => {
    for(let key in address) {
        console.log(key, address[key])
    }

    for(let entry of Object.entries(address)) {
        console.log(entry);
    }
}


showAddress(address);