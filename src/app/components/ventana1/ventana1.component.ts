import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ventana1',
  templateUrl: './ventana1.component.html',
  styleUrls: ['./ventana1.component.css']
})
export class Ventana1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.recuperar();
    this.recuperar2();
  }
resultado:any;
mensaje:any;
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}

//********************************** */
recuperar()
{
  this.resultado=localStorage.getItem('valor');
  this.mensaje=localStorage.getItem('mensaje');
}

recuperar2(){
  this.resultado=localStorage.getItem('nombre');
  this.mensaje=localStorage.getItem('apellido');
  this.resultado=localStorage.getItem('direccion');
  this.mensaje=localStorage.getItem('email');
}
}
