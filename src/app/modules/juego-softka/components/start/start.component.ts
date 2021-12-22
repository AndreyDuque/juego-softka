import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  formulario:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      "alias":['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
    })
   }

  ngOnInit(): void {
  }

  start = (formulario:FormGroup)=>{
    if(this.formulario.valid){

      console.log(formulario)
    }
  }

}
