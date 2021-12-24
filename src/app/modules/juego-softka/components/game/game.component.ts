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
  nivel: number = 0;
  idPreguntaActual: number = 0;
  categorias: string[] = ['html', 'css', 'sql', 'javascript', 'angular']
  btnConfirm: boolean = true;
  resSeleccionada: string = '';
  idCheckSelected: string = '';
  cat2 = [
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'html' },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'html' },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'html' },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'html' },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'html' },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css' },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css' },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css' },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css' },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'css' },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql' },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql' },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql' },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql' },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'sql' },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript' },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript' },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript' },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript' },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'javascript' },
    { id: 0, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular' },
    { id: 1, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular' },
    { id: 2, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular' },
    { id: 3, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular' },
    { id: 4, p: ['pregunta', 'respuestaCorrecta', 'respuestaFalsa', 'respuestaFalsa', 'respuestaFalsa'], categoria: 'angular' }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let catActual = this.cat2.filter(el => el.categoria === this.categorias[0]);
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
      let catActual = this.cat2.filter(el => el.categoria === cat);
      if (this.resSeleccionada === catActual[this.idPreguntaActual].p[1]) {
        if(this.nivel <4){
          this.nivel++;
        }else{
          console.log(`Te ganaste esto` );
          
        }
        catActual = this.cat2.filter(el => el.categoria === this.categorias[this.nivel]);
        this.idCheckSelected = '';
        this.preguntaAleatoria(catActual);
      } else {
        console.log(`no fue`);
      }
    }
  }

  onClickEvent = (event: any) => {
    this.resSeleccionada = event.target.value;
    this.idCheckSelected = event.target.id;
    this.btnConfirm = false;
  }

}
