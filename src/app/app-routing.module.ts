import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ventana1Component } from './components/ventana1/ventana1.component';
import { Ventana2Component } from './components/ventana2/ventana2.component';
import { Ventana3Component } from './components/ventana3/ventana3.component';


const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'web1', component: Ventana1Component},
  {path:'volver', component: HomeComponent },
  {path:'web2', component: Ventana2Component},
  {path:'web3', component: Ventana3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
