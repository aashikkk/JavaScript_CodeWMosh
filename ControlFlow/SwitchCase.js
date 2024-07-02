/* 
Compare the valu of variable to other bunch of variables
    switch (variable){
        case 'value of variable':
            statment;
            break;
    }
*/

let role;

switch (role){
    case 'guest':
        console.log("Guest User");
        break;
    case 'moderator':
        console.log("Moderator User");
        break;
    case 'admin':
        console.log("Admin User");
        break;
    default:
        console.log("Unknown user");
}


// Alternate
if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else if (role === "admin") console.log("Admin User");
else console.log("Unknown user");