const numbers = [3, 4];
numbers = []; // we can not reassign numbers to sth else
// 다시 배정하는 것은 에러를 발생시키지만 존재하는 엘리먼트를 지우거나 혹은 새롭게 엘리먼트를
// 추가하는 등은 괜찮다.

// End
numbers.push(5, 6); // 끝에 추가될 것이다. 
// Beginning
numbers.unshift(1, 2); // 배열의 앞에 추가될 것이다.
// Middle
// 1) 중간에 넣고 싶은 인덱스
// 2) deleteCount (0 적으면 아무것도 안지우게 된다.)
// 3) 
numbers.splice(2, 0, 'a', 'b'); // 1 , 2 이후에 'a', 'b' 가 추가될 것이다.
