// map method
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);

//const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);

const items 
= filtered.map(n => ({value : n}));

// join this array and create a string
const html = '<ul>' + items.join('') + '</ul>';
// ','는 대개 separator로 쓰인다.
// 디폴트로 ','가 separator로 쓰이기 때문에
// 조인 안에 인자를 주지 않으면 , 로 표시될 것이고 html에 콤마가 있고 싶진 않을 것이다.
console.log(html);

// chaining.. method마다 라인 다르게 주는게 컨벤션이다.
const items2 = numbers.filter(n => n >= 0) // [1,2,3]
                      .map(n => ({ value : n })) //[{value:1},..]
                      .filter(obj => obj.value > 1)//[{value:2},..]
                      .map(obj => obj.value);//[2, 3]


