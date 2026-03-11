
function Calculator() {
    this.read = function() {
        this.a = Number(prompt("Enter a number A : "));
        this.b = Number(prompt("Enter a number B : "));
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

let cal = new Calculator();

cal.read();

alert("Sum :" + cal.sum());

alert("Mul : "+ cal.mul());