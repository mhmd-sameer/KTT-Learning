function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.num = +prompt("Enter a number : ");
        this.value+=this.num;
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);