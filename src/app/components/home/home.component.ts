import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegar(){this.router.navigate(['web1']); }
  navegacion(){this.router.navigate(['volver']);}
  pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}
}
