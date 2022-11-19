const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 3);
console.log(output);

function move(array, index, offset) {
    // 움직일 위치 확인한다. 
    const position = index + offset;
    if(position >= array.length || position < 0) {
        console.error('Out of Array Index Error');
        return;
    }
    // Spread. 배열을 복사한다.
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

