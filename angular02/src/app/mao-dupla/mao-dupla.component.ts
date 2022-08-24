import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {

  curso:string = 'Angular'
  a:number = 0
  b:number = 0
  resultado:number = 0

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.curso = 'Merendar'
    }, 15000);
  }

  somar(){
    this.resultado = this.a+this.b
    return this.resultado
  }

}
