const person = {
    firstName: 'Aashik',
    lastName: 'Shihaab',
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Type a string value')

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first name and last name')

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try{
    person.fullName = '';
}
catch(e){
    console.log(e);
}

console.log(person);
// defensive programming to avoid errors.

/*
const e = new Error();
e - a plain js object. nothing special about it...

const e = new Error();
throw e;

now exceptional situation that should not have happened.

Line 15 where we receive this exception
    person.fullName = true;

    getting that error object and put there.
    catch(e){
        console.log(e);
    }

----- Steps -------
 1. Error define for particular set.
 2. try catch for where it handled.

*/