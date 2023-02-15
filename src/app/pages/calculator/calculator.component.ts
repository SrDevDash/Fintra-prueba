import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass'],
})
export class CalculatorComponent {
  currentNumber: number = 0;
  lastNumber: number = 0;
  currentOP: string = '+';

  calculate(simbol: string) {
    const aux = this.currentNumber;
    this.currentOP = simbol;
    switch (simbol) {
      case '+':
        this.currentNumber = this.currentNumber + this.lastNumber;
        break;
      case '-':
        this.currentNumber = this.currentNumber - this.lastNumber;
        break;
      case '/':
        this.currentNumber = this.currentNumber / this.lastNumber;
        break;
      case 'x':
        this.currentNumber = this.currentNumber * this.lastNumber;
        break;
    }
    this.lastNumber = aux;
  }

  deleteNumber() {
    if (this.currentNumber > 9) {
      const stringN = this.currentNumber.toString();
      this.currentNumber = parseInt(stringN.substring(0, stringN.length - 1));
    }
  }

  changeCurrentNumber(number: any) {
    this.currentNumber = parseInt(this.currentNumber + '' + number);
  }

  result() {
    this.calculate(this.currentOP);
  }
}
