import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.sass'],
})
export class MatrizComponent {
  matriz: any[] = [1, 2, 3, 4, 5, 6, 7, 8];
  result: any[] = [0, 0, 0, 0];

  constructor() {}

  sumar() {
    console.log(this.matriz);
    this.result[0] = this.matriz[0] + this.matriz[4];
    this.result[1] = this.matriz[1] + this.matriz[5];
    this.result[2] = this.matriz[2] + this.matriz[6];
    this.result[3] = this.matriz[3] + this.matriz[7];
  }

  mult() {
    this.result[0] =
      this.matriz[0] * this.matriz[4] + this.matriz[1] * this.matriz[7];
    this.result[1] =
      this.matriz[0] * this.matriz[4] + this.matriz[1] * this.matriz[6];
    this.result[2] =
      this.matriz[2] * this.matriz[4] + this.matriz[3] * this.matriz[6];
    this.result[3] =
      this.matriz[2] * this.matriz[5] + this.matriz[3] * this.matriz[7];
  }
}
