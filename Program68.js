const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map((v) => v * 2)
];

console.log(doubleAndReturnArgs([1,2,3],4,4));  // [1,2,3,8,8]


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));  // {a:1, b:2, c:3, d:4}