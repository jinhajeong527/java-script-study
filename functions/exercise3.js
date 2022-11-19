// Error Handling
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(true, 1);
    console.log(count);
} catch(error) {
    console.error(error.message);    
}


function countOccurrences(array, searchElement) {
    if(!Array.isArray(array)) {
        throw new Error('This is not an valid array');
    }
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}