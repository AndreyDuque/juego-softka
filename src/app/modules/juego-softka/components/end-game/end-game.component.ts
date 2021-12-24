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
        this.historial = data.filter(el => el.alias === this.jugador[0].alias);
  }

}
