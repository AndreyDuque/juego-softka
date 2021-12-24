import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  respuestas: string[] = [];
  pregunta: string = '';
  nivel: number = 0;
  idPreguntaActual: number = 0;
  categorias: string[] = ['html', 'css', 'sql', 'javascript', 'angular']
  btnConfirm: boolean = true;
  resSeleccionada: string = '';
  idCheckSelected: string = '';
  nivelCategoria = [
    { id: 0, p: ['¿Que es HTML?', 'Lenguaje de marcado', 'Lenguaje de señas', 'Lenguaje escrito', 'Lenguaje del amor'], categoria: 'html', puntaje: 100 },
    { id: 1, p: ['¿Son etiquetas de HTML?', '<nav></nav>', '<amor/>', '<¡/>', '?>'], categoria: 'html', puntaje: 100 },
    { id: 2, p: ['¿Que etiqueta se usa para construir formularios en HTML?', '<form></form>', '<for></>', '<enForma>', '<deforma>'], categoria: 'html', puntaje: 100 },
    { id: 3, p: ['¿Es una etiqueta de titulo en HTML?', '<h1></h1>', 'title', '<p></p>', '<titulo>'], categoria: 'html', puntaje: 100 },
    { id: 4, p: ['Esta etiqueta se usa para obtener un divisor horizontal:', '<hr>', '<br></br>', '<divisor>', 'divHorizontal'], categoria: 'html', puntaje: 100 },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css', puntaje: 200 },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css', puntaje: 200 },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css', puntaje: 200 },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css', puntaje: 200 },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css', puntaje: 200 },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql', puntaje: 400 },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql', puntaje: 400 },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql', puntaje: 400 },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql', puntaje: 400 },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql', puntaje: 400 },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript', puntaje: 800 },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript', puntaje: 800 },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript', puntaje: 800 },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript', puntaje: 800 },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript', puntaje: 800 },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular', puntaje: 1600 },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular', puntaje: 1600 },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular', puntaje: 1600 },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular', puntaje: 1600 },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular', puntaje: 1600 }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let catActual = this.nivelCategoria.filter(el => el.categoria === this.categorias[0]);
    this.preguntaAleatoria(catActual);
  }

  preguntaAleatoria = (arrayPreguntas: any[]) => {
    let nPreg: number = 0;
    let condicion = true;
    do {
      nPreg = parseInt((Math.random() * 10).toString());
      if (nPreg < 5) {
        condicion = false;
      }
    } while (condicion);
    console.log('parseInt((Math.random() * 10).toString()) :>> ', nPreg);
    let pregunta = arrayPreguntas.filter(el => el.id === nPreg)[0];
    console.log('pregunta :>> ', pregunta.p);
    this.pregunta = pregunta.p[0];// muestra la pregunta actual
    let nRes: number = 0;
    let order: number[] = [];
    let condicionRes = true;
    do {
      nRes = parseInt((Math.random() * 10).toString());
      if (nRes > 0 && nRes < 5 && !order.includes(nRes)) {
        order.push(nRes);
        if (order.length > 3) {
          condicionRes = false;
        }
      }
    } while (condicionRes);
    console.log('order :>> ', order);
    this.respuestas = [];
    order.forEach(el => {
      this.idPreguntaActual = el;
      this.respuestas.push(pregunta.p[el])
    })
    console.log('this.respuestas :>> ', this.respuestas);
  }

  confirmar = (formulario: NgForm) => {

    if (this.nivel < 5) {

      let cat = this.categorias[this.nivel];
      let catActual = this.nivelCategoria.filter(el => el.categoria === cat);
      if (this.resSeleccionada === catActual[this.idPreguntaActual].p[1]) {
        let idJugadorActual: string = localStorage.getItem('jugadorActual') || '';
        let data: any[] = JSON.parse(localStorage.getItem('registros') || '[]');
        let jugador: any = data.filter(el => el.id === idJugadorActual);
        jugador[0].puntaje = parseInt(jugador[0].puntaje) + catActual[this.idPreguntaActual].puntaje
        localStorage.setItem('registros', JSON.stringify(data));
        console.log(`data`, data)
        if (this.nivel < 4) {
          this.nivel++;
        } else {
          console.log(`Te ganaste esto`);
          this.router.navigate(['/game/end-game'])
        }
        catActual = this.nivelCategoria.filter(el => el.categoria === this.categorias[this.nivel]);
        this.idCheckSelected = '';
        this.preguntaAleatoria(catActual);
      } else {
        console.log(`no fue`);
        this.router.navigate(['/game/end-game'])
      }
    }
  }

  onClickEvent = (event: any) => {
    this.resSeleccionada = event.target.value;
    this.idCheckSelected = event.target.id;
    this.btnConfirm = false;
  }

  salir = () => {
    this.router.navigate(['/game/end-game']);
  }

}
