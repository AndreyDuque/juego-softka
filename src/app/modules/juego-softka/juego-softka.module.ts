import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoSoftkaRoutingModule } from './juego-softka-routing.module';
import { StartComponent } from './components/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    JuegoSoftkaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JuegoSoftkaModule { }
