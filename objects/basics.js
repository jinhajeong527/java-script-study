// Object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw : function() {
        console.log('draw');
    }
}
circle.draw();
// OOP
// draw function 대신에 method라고 한다.
// 오브젝트의 한 파트라면 메서드라고 부른다.


// Factory Function
// 오브젝트를 생성한다.
// Camel Notation
function createCircle(radius) {
    return {
        radius, // 키랑 값 같으면 하나만 써줘도 된다.
        // draw : function() {
        //     console.log('draw');
        // }

        // function keyword는 제거한다.
        draw() {
            console.log('draw');
        }
    }    
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


// Constructor Function
// Pascal Notation by convention
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    return this;
}
console.log(Circle.constructor); // Function()
const circle3 = new Circle(1);

// 첫번째 인자 : target of this
Circle.call({}, 1, 2, 3, 4);
Circle.apply({}, [1, 2, 3, 4]);

const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

console.log(Circle1);
const circle4 = new Circle1(2);
console.log(circle4);


// const x = {} 와 같은 빈 오브젝트를 만들게 된다.
// 위의 Function으로부터 해당 오브젝트를 리턴하게 된다.

// 두 패턴 사이에 큰 차이가 없다.
// 어떤 패턴이든 상관없으니 하나 정해서 고수해라

// 자바 스크립트의 프로퍼티는 다이나믹하다.
// 언제든지 추가할 수 있고 삭제할 수 있다. 

const square = {
    width:  20
};

square.color = "yellow";
delete square.width;
delete square.color;

console.log(square);
