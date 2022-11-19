function playVideo() {
    console.log(this);
}

playVideo();

const video =  {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, this);
    }
    // 이렇게 해보면 window 오브젝트가 나오는 것을 볼 수 있는데
    // 그 이유는 call back function 안이기 때문이다.
    // this가 여기서 video가 아닌 이유이다. 
    // video를 this로 지정하고 싶으면 위와 같이 지정해줄 수 있다. 
}
video.showTags();