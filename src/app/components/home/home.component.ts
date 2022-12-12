import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 
  }
  numero:any;
  suma:any;
  sueldos=[1000,1223,12323,232,34454];
    ngOnInit(): void {
      this.numero=3;
      this.almacenar();
      this.informacion();
      localStorage.clear();
      this.nombre='nombre';
}
almacenar(){
  localStorage.setItem('valor', this.numero)
  localStorage.setItem('mensaje', 'Hola mi nombre es Andy Capón')
}
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}

//******FORMULARIO********* */
nombre:any;
apellido:any;
direccion:any;
email:any;
contraseña:any;
informacion(){
  localStorage.setItem('nombre', this.nombre)
  localStorage.setItem('apellido', this.apellido)
  localStorage.setItem('direccion', this.direccion)
  localStorage.setItem('email', this.email)
  localStorage.setItem('contraseña', this.contraseña)
}
}



