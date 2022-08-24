import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  img:string = 'https://c.tenor.com/6geB5ncIQIUAAAAC/fofinha.gif'
  tamanho:number = 100

  constructor() { }

  ngOnInit(): void {
  }

  aumentar(){
    this.tamanho += 10
  }

  diminuir(){
    this.tamanho -= 10
  }

  bait(){
    alert('...bait!');
  }
}
