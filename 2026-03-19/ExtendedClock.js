class ExtendedClock extends Clock{
    constructor(temp){
        super(temp);
        this.precision = 1000;
    }

    start(){
        this.render();
        let timer = setInterval(()=> this.render(),this.precision)
    }
}