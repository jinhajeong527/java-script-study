const movies = [
    { title : 'a', year : 2018, rating: 4.5},
    { title : 'b', year : 2018, rating: 4.7},
    { title : 'c', year : 2018, rating: 3},
    { title : 'd', year : 2017, rating: 4.5},
];
// All the movies in 2018 with rating > 4
const filteredMovies = movies.filter((movie) => movie.year >= 2018 && movie.rating > 4.0);
console.log(filteredMovies);
// Sort them by their rating
const sortedMovies = filteredMovies.sort((a,b) => {
    // 이렇게 작성했어야 내림차순이 가능했던 이유는
    // 기본적으로 sort()는 오름차순 정렬이기 때문이다.
    // 그래서 a의 rating이 더 높으면 -1을 리턴할 때, 
    // 의도한 대로 내림차순을 할 수 있었던 것이고
    // 오름차순이 하고 싶으면 1을 리턴하면 된다. 
    // if(a.rating > b.rating) return -1;
    // if(a.rating < b.rating) return 1;
    // return 0;
    // sort는 ascending order 이다. 
    
    a.rating - b.rating;
    // a = 4.5
    // b = 4.7

});
console.log({sortedMovies});
// Descending order
const descendingOrderMovies = sortedMovies.reverse();
// Pick their title property
const result = descendingOrderMovies.map(movie => {
    return movie['title'];
})
// 결과는 'b', 'a'가 나와야 한다. 
console.log({result});
