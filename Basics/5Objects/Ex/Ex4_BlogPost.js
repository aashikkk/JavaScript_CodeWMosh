// title
// body
// author
// views - num
// comments ( can have multiple comments, so array to containe)
//   (author, body)
// isLive

const blogPost = {
    title: "Basics in SE",
    body: "abc",
    author: "John",
    views: 12,
    comments: [
        {
            author: "Ranbir",
            body: `It's awesome`,
        },
        {
            author: "a",
            body: `b`,
        }
    ],
    isLive: true,
}

console.log(blogPost);