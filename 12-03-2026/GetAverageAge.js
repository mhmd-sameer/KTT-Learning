let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let total = arr.reduce((sum,user) => user.age + sum,0);
    return total/arr.length;
}

alert( getAverageAge(arr) ); 

