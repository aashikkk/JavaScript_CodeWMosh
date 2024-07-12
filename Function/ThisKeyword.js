// This reference the object that is executing the
// current function.

/*
If the function is within the object --> method -> obj
Also if the method in an object, that refer to object.
Just func(Not within the object) --> function -> global (window, global)

*/

// 1st rule

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this)
    }
    // play(){
    //     console.log(this);
    // }
}

video.showTags();


// 1st rule

// video.stop = function (){
//     console.log(this);
// }

// video.play();
// video.stop();

// 2nd rule 
// function playVideo(){
//     console.log(this);
// }

function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // {}

// playVideo();
// will get window object here.

/*
we will make playVideo() to change as constructor function.
-> Video()

so new Keyword will create new empty Object {} and
point this to that empty object.
instead of window object, we will get new object.

function Video(title){
    this.title = title; --> point this to {} empty object
    console.log(this);
}

const v = new Video('b'); // {} --> here 54line

When dealing with regular functions, this by default
references the global object.
but 
if you call a function using the new operator, 
which is the case for constructor functions.
this will reference a new empty object.

------------

showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        })
    }

res->
    undefined a
    undefined b
    undefined c

    bcz that callback function is window object func,
    not object function. so it directly refers to
    window global object.

    for this,
    we have 2nd parameter to callback function.
    thisArg...
    here if we put this, that will outside of the call back
    and withing showTags. so we can refer.
*/
