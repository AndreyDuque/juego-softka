import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit {

  jugadorActual = '';
  registro: any[] = [];
  id = '';
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.formulario = formBuilder.group({

      "alias": ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])]

    })

  }

  ngOnInit(): void {
  }

  start = (formulario: FormGroup) => {

    if (this.formulario.valid) {

      if (localStorage.getItem("registros") === null) {

        let alias: string = this.formulario.value.alias;
        this.id = new Date().toISOString();
        let reg = { id: this.id, alias: alias, puntaje: 0 };
        this.registro.push(reg);
        localStorage.setItem('registros', JSON.stringify(this.registro));
        localStorage.setItem('jugadorActual', this.id);
        this.router.navigate(['/game/actually']);

      } else {

        this.registro = JSON.parse(localStorage.getItem('registros') || '[]');
        let alias: string = this.formulario.value.alias;
        this.id = new Date().toISOString();
        let reg = { id: this.id, alias: alias, puntaje: 0 };
        this.registro.push(reg);
        localStorage.setItem('registros', JSON.stringify(this.registro));
        localStorage.setItem('jugadorActual', this.id);
        this.router.navigate(['/game/actually']);
        
      }
    }
  }


}
