const testCases = new Array(19).fill(2).map((value,ind)=> value+ind);
console.log(testCases)

// jest version
const testCasesJest = new Array(19).fill(2).map((value,ind)=> [value+ind])
console.log(testCasesJest)

console.log('#############');
const a= new Array(19);
console.log(a);
const b = a.fill(2);
const c= b.map((value,ind)=>value+ind);

console.log(b);
console.log(c);