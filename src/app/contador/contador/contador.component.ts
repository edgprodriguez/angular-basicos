import { Component } from '@angular/core';   

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base: <strong> {{base}} </strong></h3>

    <!-- <button (click)="numero = numero + 1;"> + 1 </button> -->
    <!-- <button (click)="sumar()"> + 1 </button> -->
    <!-- <button (click)="acumular(+1)"> + 1 </button> -->
    <button (click)="acumular(+base)"> + {{base }} </button>

    <span> {{ numero }} </span>

    <!-- <button (click)="numero = numero - 1;"> - 1 </button> -->
    <!-- <button (click)="restar()"> - 1 </button> -->
    <!-- <button (click)="acumular(-1)"> - 1 </button> -->
    <button (click)="acumular(-base)"> - {{ base }} </button>
    `
})

export class ContadorComponent{
    titulo: string =  'Contador 33App';
    numero: number = 10;
  
    /*   sumar(){
      this.numero += 1;
    }
    restar(){
      this.numero -= 1;
    }  */
  
    base: number = 5;
  
    acumular( valor: number){
      this.numero += valor;
    }
}