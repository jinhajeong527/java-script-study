// Blog Post Object
// title
// body
// author
// views
// comments (author, body)
// isLive : either true or false

const blogPost = {
    title: 'How To Be A Great Developer',
    body: 'Just Keep Going',
    author: 'Jinha Jeong',
    views: 20203,
    comments: [{
        author: 'Sooyeon',
        body: 'Hi'
    }, {
        author: 'Hwanseok',
        body: 'Hello'
    }],
    isLive: true,
};

console.log(blogPost);