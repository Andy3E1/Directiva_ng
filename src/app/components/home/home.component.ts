import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  numero:any=2;
  sueldos=[1000,1223,12323,232,34454];
    ngOnInit(): void {
      this.numero;
}
}


