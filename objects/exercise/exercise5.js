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
// 아직 퍼블리시 되지 않음
function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const blogPostNotYetPublished = new BlogPost('title1', 'body1', 'author1');
console.log(blogPostNotYetPublished);

