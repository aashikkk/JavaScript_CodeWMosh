function isLandscape(width, height) {
    return (width > height);
}

let a = isLandscape(200, 400)
console.log(a);

// return (width > height) ? true : false;
// true or false no need to return explicitly.