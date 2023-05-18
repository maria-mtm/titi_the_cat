


class Display {
    constructor(displayCurrentValue, displayFinalValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayFinalValue = displayFinalValue;
        this.calculator = new Calculator();
        this.typoOfOperator = undefined;
        this.currentValue = ``;
        this.finalValue = ``;
        this.symbols = {
            add: `+`,
            divide:`/`,
            multiply: `*`,
            subtract:`-`
            

        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1) //su valor actual se recorta por su ultima posicion
        this.print();
    }

    deleteAll() {
        this.currentValue = ``;
        this.finalValue = ``;
        this.typoOfOperator = undefined;
        this.print();

    }

    operation(type){
        this.typoOfOperator !== `equal` && this.calculate();
        this.typoOfOperator = type;
        this.finalValue = this.currentValue || this.finalValue;
        this.currentValue=``;
        this.print();

    }

    addNumbers(number) {
        if (number === `.` && this.currentValue.includes(`.`)) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.print();
    }

    print() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayFinalValue.textContent = `${this.finalValue} ${this.symbols[this.typoOfOperator] || ''}`
    }

    calculate() { //coge los valores calculables y se los manda a la calculadora
        //convertimos los string en numeros:
        const finalValue = parseFloat(this.finalValue); 
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(finalValue)) return 
        this.currentValue = this.calculator[this.typoOfOperator](finalValue, currentValue)

    }
}