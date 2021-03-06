import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndGameComponent } from './components/end-game/end-game.component';
import { GameComponent } from './components/game/game.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path:"", component:StartComponent},
  {path:"actually", component:GameComponent},
  {path:"end-game", component:EndGameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoSoftkaRoutingModule { }
