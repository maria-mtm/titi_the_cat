


class Display {
    constructor(displayCurrentValue, displayFinalValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayFinalValue = displayFinalValue;
        this.calculator = new Calculator();
        this.currentValue = ``;
        this.finalValue = ``;
    }

    addNumbers(number) {
        this.currentValue = this.currentValue + number;
        this.print();
    }

    print() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayFinalValue.textContent = this.finalValue
    }
}