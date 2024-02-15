import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  /*aqui nao tem nada pois esta sendo recebido por quem chama que é o home*/
  @Input()
  Id:string = '0'
  @Input()
  photoCover: string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = 'descricao dinamica'
  constructor() { }

  ngOnInit(): void {
  }

}
