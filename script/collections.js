let collections = new Map();

collections.set('name', 'Tayler');
console.log(collections);
// console.log(collections.has('name'));
// console.log(collections.size);
// console.log(collections.get('name'));
// console.log(collections.delete('name'));
// console.log(collections.has('name'));
// console.log(collections.clear());

for (let key of collections.keys()) {
    console.log(key);
}
  
for (let value of collections.values()) {
    console.log(value);
}
  

for (let entry of collections) {
    console.log(entry);
}

let uniquieArray = new Set([1, 3, 4, 3, 1]);
// console.log(uniquieArray.size);
// console.log(uniquieArray.has(3));
// console.log(uniquieArray.add(3));
// console.log(uniquieArray.delete(3));

for (const iterator of uniquieArray) {
    console.log(iterator);
}

for (const key of uniquieArray.keys()) {
    console.log(key);
}

for (const value of uniquieArray.values()) {
    console.log(value);
}

console.log(uniquieArray.entries());
console.log(uniquieArray.clear());