const calculator = {
    read(){
        this.a = Number(prompt("Enter a number A: ",0));
        this.b = Number(prompt("Enter a number B: ",0));
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());