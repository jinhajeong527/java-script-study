// this는 현재의 function을 실행하는 오브젝트를 의미한다.
// this의 value를 function에서 바꾸는 방법에 대해서 설명할 것이다.
const video =  {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            // this 대신에 self로 바꾼다. (that으로 쓰는 사람도 있음)
            // 새로운 function이 호출될 때 마다 value가 바뀌기 때문이다.
            // console.log(this.title, tag); global object를 의미하게 된다. 
            // console.log(self.title, tag);
            console.log(this.title, tag); // using bind method...
            // 두 번째 방법이지만, 가장 좋은건 arrow function을 사용하는 것이다.
            
        }.bind(this)); // 여기에 second parameter가 없으면, this의 값을 어떻게 바꿀 수 있을까?
    }
    // 따로 콜백 함수에서 this 지정해주지 않는다면,
    // 어떻게 값을 바꿀 수 있을까?
    // 이렇게 많이들 사용은 하지만 권장하지 않는 방식이다. 알고만 있으면 된다. 

}
video.showTags();
// Starting from ECMA script 6 , we have arrow function
const video2 =  {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
        // arrow function은 this를 containing function으로 부터 상속받기 때문에 
        // 이렇게 해도 원하는 콘솔 로그를 출력할 수 있다. 
    }
}

// 1. const self = this;
// 2. bind(this)
// 3. => arrow function 







// functions are object in java script
function playVideo(a, b) {
    console.log(this);
}
// call() method의 사용
// 차이점은 passing arguments(call, apply)
// 아래와 같이 오브젝트 넘기면, this는 해당 오브젝트를 레퍼런스 히게 된다. 
playVideo.call({ name : 'Mosh' }, 1, 2);
// this의 value로 사용된다. only about passing argument가 call과의 다른 점이다. 
// 배열로 넘겨주어야 한다. 
playVideo.apply({ name : 'Mosh' }, [1, 2]);
// bind는 playVideo 함수를 호출하지 않는다. 새로운 function을 리턴하고,
// 새로운 함수를 리턴하고, 해당 오브젝트를 영구적으로 포인팅하게 된다. 
const fn = playVideo.bind({ name : 'Mosh'})();
fn(); // OR **
playVideo.bind({ name : 'Mosh'})();

// => playVideo function을 호출하지 않는다. 
playVideo(); // 이건 window object를 레퍼런스 하는 것이다. 
