// Object is only have properties and methods. 
// Not Primitives.

// String primitive
const message = ' This is my first message '

// String object
const another = new String('hello');

// but in message. we can see the properties and methods.
// bcz JS engine wrap up as object. 

message.trim();
message.trimStart();
message.includes('my');

//Escape Notation, \'

message.split(' ') 
// can get an array of 5 items

// indexOf
// replace
// toUpperCase
// length
// startsWith
// endsWith
message[0]