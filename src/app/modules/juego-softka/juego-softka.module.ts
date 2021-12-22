import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoSoftkaRoutingModule } from './juego-softka-routing.module';
import { StartComponent } from './components/start/start/start.component';


@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    JuegoSoftkaRoutingModule
  ]
})
export class JuegoSoftkaModule { }
