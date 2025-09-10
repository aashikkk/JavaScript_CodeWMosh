// title
// body
// author
// views - num
// comments ( can have multiple comments, so array to containe)
//   (author, body)
// isLive

const blogPost = new BlogPost('a','b','c');

// Think like we are drafting first time
function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(blogPost);