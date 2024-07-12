// what if we don't have this as 2nd argument.
// const that = this; or self 
// but not recommended.

// self method - 1st solution

/*
using bind - 2nd solution
showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this));
    }

*/

/*
newer and better solution
arrow function inherit this from containing function.
*/ 


const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}

video.showTags();

// function playVideo(a,b){
//     console.log(this);
// }

// playVideo.call({name: 'Aashik'}, 1,2)
// playVideo.apply({name: 'Aashik'},[1,2])

// playVideo.bind({name: 'Aashik'})(); // direct call
// const fn = playVideo.bind({name: 'Aashik'})
// fn();
// playVideo(); // Global object - window
// call and apply difference - multiple argument pass
// ponnakola array podanum apply ki.

// bind method return new object.