import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  numero:any;
  suma:number=0;
  suma2:number=0;
  sum:number=0;
  nombre_variable:number=0;
  vector: string[]=[];
    ngOnInit(): void {
  this.total();
  this.total2();}

  navegar(){this.router.navigate(['web1']); }
  navegacion(){this.router.navigate(['volver']);}
  pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}
total(){
  let numero1:number=2;
  let numero2:number=0;
  var total=this.suma;
this.suma=numero1+numero2;
this.suma2=this.suma+5;
console.log("SUMA: ",this.suma2)
this.sum=this.suma2*2;
}

total2(){
  console.log("MULTIPLICACION: ",this.sum);
}
}


