const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];
console.log(combined);

// Also in this method, can easily join between
// const combined = [...first, 'a',...second, 'b']

// const copy = combined.slice();
const copy = [...combined];
