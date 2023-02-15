import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-numbers',
  templateUrl: './friend-numbers.component.html',
  styleUrls: ['./friend-numbers.component.sass'],
})
export class FriendNumbersComponent {
  num1: number = 0;
  num2: number = 0;

  sonAmigos(num1: number, num2: number): boolean {
    // Calcula los divisores propios de cada número y sumalos
    let sum1 = this.sumaDivisoresPropios(num1);
    let sum2 = this.sumaDivisoresPropios(num2);

    // Compara las sumas y devuelve true si son iguales (son amigos)
    if (sum1 === num2 && sum2 === num1) {
      return true;
    } else {
      return false;
    }
  }

  private sumaDivisoresPropios(num: number): number {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum;
  }

  evaluar() {
    const result = this.sonAmigos(this.num1, this.num2);

    if (result) {
      alert(`Los numeros ${this.num1} y ${this.num2} son amigos`);
    } else {
      alert(`Los numeros ${this.num1} y ${this.num2} no son amigos`);
    }
  }
}
