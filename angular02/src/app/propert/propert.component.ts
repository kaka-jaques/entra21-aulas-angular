import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert',
  templateUrl: './propert.component.html',
  styleUrls: ['./propert.component.css']
})
export class PropertComponent implements OnInit {

  //properties

  nome:string = 'agora eu saquei... agora eu entendi tudo... eu estava cego, mas agora eu vejo...'
  sobrenome!:string
  idade:string = '21'
  email:string = 'kjfakhouri@gmail.com'
  possuiCarro:boolean = true
  enderecoImagem:string = 'https://raw.githubusercontent.com/vugar005/ngx-awesome-uploader/master/angular-image.gif?raw=true'
  padrao:string = '300'
  google:string = 'https://google.com'
  table:string = ''

  constructor() { }
  ngOnInit(): void {

  }

}
