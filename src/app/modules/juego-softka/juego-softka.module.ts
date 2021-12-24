import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoSoftkaRoutingModule } from './juego-softka-routing.module';
import { StartComponent } from './components/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';
import { EndGameComponent } from './components/end-game/end-game.component';


@NgModule({
  declarations: [
    StartComponent,
    GameComponent,
    EndGameComponent
  ],
  imports: [
    CommonModule,
    JuegoSoftkaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JuegoSoftkaModule { }
