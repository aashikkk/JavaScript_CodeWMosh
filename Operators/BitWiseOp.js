/*
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011 // R of OR
/// R = 00000000

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

use to give permission and check permissions
-- Bitwise OR - Add permission
-- Bitwise AND - Check permissions if that given
*/

// Read, Write, Execute
// 00000100 - has Read permission only
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = 
    (myPermission & readPermission) ? 'yes' : 'no'
  
console.log(message);

