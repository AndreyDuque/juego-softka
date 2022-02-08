import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  respuestas: string[] = [];
  pregunta: string = '';
  nivel: number = 0;
  puntuacion: number = 0;
  idPreguntaActual: number = 0;
  categorias: string[] = ['html', 'css', 'sql', 'javascript', 'angular']
  btnConfirm: boolean = true;
  resSeleccionada: string = '';
  idCheckSelected: string = '';
  nivelCategoria = [
    { id: 0, p: ['¿Que es HTML?', 'Un lenguaje de etiquetas', 'Lenguaje de señas', 'Lenguaje escrito', 'Lenguaje del amor'], categoria: 'html', puntaje: 100 },
    { id: 1, p: ['¿Son etiquetas de HTML?', '<p></p>', '<amor/>', '<¡/>', '?>'], categoria: 'html', puntaje: 100 },
    { id: 2, p: ['¿Que etiqueta se usa para construir formularios en HTML?', '<form></form>', '<for></>', '<enForma>', '<deforma>'], categoria: 'html', puntaje: 100 },
    { id: 3, p: ['¿Es una etiqueta de titulo en HTML?', '<title></title>', 'title', '<p></p>', '<titulo>'], categoria: 'html', puntaje: 100 },
    { id: 4, p: ['Esta etiqueta se usa para obtener un divisor horizontal:', '<hr>', '<br></br>', '<divisor>', 'divHorizontal'], categoria: 'html', puntaje: 100 },
    { id: 0, p: ['¿Que es CSS?', 'Hojas de estilos en cascada', 'Camilo Sos Santo', 'Codigo Sujeto a Servicios', 'Etiquetas de estilos'], categoria: 'css', puntaje: 200 },
    { id: 1, p: ['¿Cómo podemos añadir un comentario en una hoja de estilo CSS?', 'Entre los caracteres "/*" y "*/ "', 'No se puede', 'Entre las etiquetas "<!--" y "-->"', 'Después de los caracteres "//". Ej: // Este es un comentario CSS'], categoria: 'css', puntaje: 200 },
    { id: 2, p: ['¿En qué sección de la página HTML podemos definir una hoja de estilo interna CSS?', 'En la sección <head>', 'reEn la sección <footer>spuestaFalsa', 'Se puede definir en cualquier sección de la página', 'En al sección <body>'], categoria: 'css', puntaje: 200 },
    { id: 3, p: ['¿Cuál es la forma más eficiente de aplicar estilos CSS en un documento HTML?', 'Hojas de estilo externas', 'En línea', 'Incrustado en la cabecera', 'Mediante PHP'], categoria: 'css', puntaje: 200 },
    { id: 4, p: ['¿Cómo se cambia el valor del margen derecho de un elemento?', 'margin-right', 'text-right', 'right-magin', 'respuestaFalsa'], categoria: 'css', puntaje: 200 },
    { id: 0, p: ['¿Qué significan las siglas SQL?', 'Structured Query Language', 'Structured Question Line', 'Strong Question Language', 'Lo Que Sale'], categoria: 'sql', puntaje: 400 },
    { id: 1, p: ['¿Qué comando extrae datos de la base de datos?', 'SELECT', 'ALTER', 'FILTER', 'QUIT'], categoria: 'sql', puntaje: 400 },
    { id: 2, p: ['Comando que permite modificar la estructura de un objeto', 'ALTER', 'UPDATE', 'DELETE', 'INSERT'], categoria: 'sql', puntaje: 400 },
    { id: 3, p: ['¿Cuál es la sintaxis correcta para seleccionar todos los campos de una tabla llamada "Trabajadores"?', 'SELECT * FROM Trabajadores', 'SELECT [all] FROM Trabajadores', 'SELECT Trabajadores', 'SELECT Trabajadores, Apellidos'], categoria: 'sql', puntaje: 400 },
    { id: 4, p: ['¿Qué palabra clave se utiliza para ordenar el resultado?', 'ORDER BY', 'SORT', 'ORDER', 'COUNT'], categoria: 'sql', puntaje: 400 },
    { id: 0, p: ['¿En qué lugar se ejecuta generalmente el código JavaScript?', 'Cliente (en el propio navegador de internet)', 'Servidor', 'De tu lado', 'Ninguna de las anteriores'], categoria: 'javascript', puntaje: 800 },
    { id: 1, p: ['¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?', '< script > y < /script >', '< javascript _code > y < /javascript_code >', '< ?script > y < script? >', '<strip></strip>'], categoria: 'javascript', puntaje: 800 },
    { id: 2, p: ['La llamada al código Javascript debe colocarse en:', 'Puede colocarse en la sección Head o en Body', 'Antes de la etiqueta HTML', 'La sección footer de la página', 'En la sección main'], categoria: 'javascript', puntaje: 800 },
    { id: 3, p: ['En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:', 'JavaScript diferencia entre mayúsculas y minúsculas', 'JavaScript no distingue entre mayúsculas y minúsculas', 'No se pueden usar mayúsculas', 'Las variables no se nombran'], categoria: 'javascript', puntaje: 800 },
    { id: 4, p: ['¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?', 'Return', 'Value', 'Send', 'Void'], categoria: 'javascript', puntaje: 800 },
    { id: 0, p: ['¿Que es Angular?', 'Un framework para aplicaciones web', 'Un framework para aplicaciones moviles', 'Un lenguaje de programación', 'Software para realizar testing'], categoria: 'angular', puntaje: 1600 },
    { id: 1, p: ['¿En qué carpeta de un proyecto en Angular va nuestro código fuente?', 'src', 'dist', 'public', 'main'], categoria: 'angular', puntaje: 1600 },
    { id: 2, p: ['¿Qué comando de Angular CLI debo utilizar para crear un componente llamado mi-componente?', 'ng generate component mi-componente', 'ng make component mi-componente', 'ng extend component mi-componente', 'ng create component mi-componente'], categoria: 'angular', puntaje: 1600 },
    { id: 3, p: ['¿Cómo instalo Angular CLI en mi ordenador?', 'npm install -g angular-cli', 'node install -g angular-cli', 'Angular CLI no se instala', 'Install angular'], categoria: 'angular', puntaje: 1600 },
    { id: 4, p: ['¿Que comando se ejecuta en consola para saver la versión de Angular instalada?', 'ng -v', 'npm -version', 'ng start', 'ng server'], categoria: 'angular', puntaje: 1600 }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    // Obtener arreglo de objetos con la categoria HTML
    let catInicial = this.nivelCategoria.filter(el => el.categoria === this.categorias[0]);
    this.preguntaAleatoria(catInicial);

  }

  // Cargar la categoria para generar la pregunta de manera aleatoria
  preguntaAleatoria = (arrayCategoria: any[]) => {
    let nPreg: number = 0;
    let condicion = true;

    do {
      nPreg = parseInt((Math.random() * 10).toString());
      if (nPreg < 5) {
        condicion = false;
      }
    } while (condicion);

    // Filtrar pregunta por su id, atravez del numuero obtenido en el siclo doWhile
    let pregunta = arrayCategoria.filter(el => el.id === nPreg)[0];
    this.pregunta = pregunta.p[0];// muestra la pregunta actual

    // Ordenar respuestas de manera aleatoria
    let nRes: number = 0;
    let orderRespustas: number[] = [];
    let condicionRes = true;

    do {
      nRes = parseInt((Math.random() * 10).toString());
      if (nRes > 0 && nRes < 5 && !orderRespustas.includes(nRes)) {
        orderRespustas.push(nRes);// Ingresar datos entre 1 y 4 al array orderRespustas
        if (orderRespustas.length > 3) {
          condicionRes = false;
        }
      }
    } while (condicionRes);

    this.respuestas = [];
    orderRespustas.forEach(el => {
      this.respuestas.push(pregunta.p[el])// Cargar orden de las respuestas en el array respuestas
      this.idPreguntaActual = nPreg;
    })

  }

  confirmar = (formulario: NgForm) => {

    let cat = this.categorias[this.nivel];
    let catActual = this.nivelCategoria.filter(el => el.categoria === cat);

    if (this.nivel < 5) {

      if (this.resSeleccionada === catActual[this.idPreguntaActual].p[1]) {

        let idJugadorActual: string = localStorage.getItem('jugadorActual') || '';
        let data: any[] = JSON.parse(localStorage.getItem('registros') || '[]');
        let jugador: any = data.filter(el => el.id === idJugadorActual);
        jugador[0].puntaje = parseInt(jugador[0].puntaje) + catActual[this.idPreguntaActual].puntaje;
        localStorage.setItem('registros', JSON.stringify(data));
        this.resSeleccionada = '';

        if (this.nivel < 4) {

          this.nivel++;
          
        } else {

          alert('Felicidades, sabes un poquitico... (:');
          this.router.navigate(['/game/end-game']);

        }

        this.puntuacion = jugador[0].puntaje;
        catActual = this.nivelCategoria.filter(el => el.categoria === this.categorias[this.nivel]);
        this.idCheckSelected = '';
        this.preguntaAleatoria(catActual);

      } else {

        if (this.idCheckSelected === '') {

          alert('Selecciona una respuesta');

        }
        else {

          alert('Respuesta incorrecta, has perdido :(');
          this.router.navigate(['/game/end-game']);

        }
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
