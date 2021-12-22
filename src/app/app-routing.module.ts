import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/shared/layout/layout/layout.component';

const routes: Routes = [
  {path:"", component:LayoutComponent, children:[
    {path:"", redirectTo:"game", pathMatch:"full"},
    {path:"game", loadChildren:()=>import("./modules/juego-softka/juego-softka.module").then(module=>module.JuegoSoftkaModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
