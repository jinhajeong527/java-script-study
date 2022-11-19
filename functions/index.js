// Function Declaration
function walk() {
    console.log('walk');
}
// Anonymous Function Expression
let run = function() {
    console.log('run');
};
let move = run;
//one object in memory를 참조하고 있다. 
run();
move();