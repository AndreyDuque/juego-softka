import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {

  idJugadorActual = '';
  jugador: any[] = []
  historial: any[] = []

  constructor() { }

  ngOnInit(): void {

    this.idJugadorActual = localStorage.getItem('jugadorActual') || '';
    let data: any[] = JSON.parse(localStorage.getItem('registros') || '[]');
    this.jugador = data.filter(el => el.id === this.idJugadorActual);
    let historialFiltrado = data.filter(el => el.alias === this.jugador[0].alias);
    
    for (let i = historialFiltrado.length-5; i < historialFiltrado.length; i++) {
      
      this.historial.push(historialFiltrado[i]);
      
    }
    
  }

}
