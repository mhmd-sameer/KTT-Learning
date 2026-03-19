let student1 = {
    firstName : "Mohammed",
    lastName : "Sameer",
}

let print = function(hometown) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown);
    }

print.call(student1,"Tiruppur");

// call method -> used to call a function depends on the object that we refer

let student2 = {
    firstName : "Subha",
    lastName : "Devi",
}

print.call(student2,"Bavani");

// apply method -> only difference between call and apply method is
// that we pass the arguments as array here insted of passing it as seperate args

print.apply(student2, ["Bhavani"])

// bind method -> binds a method with a object and returns the function, which can be invoked later.


let func = print.bind(student1,"Tiruppur");
console.log(func);
func();

