import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/Heroe';
import { HeroeService } from 'src/app/shared/heroe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  nombreh : string = "";
  indice : number = 0;
  miheroe : Heroe = {
    nombre : "",
    bio : "",
    img : "",
    aparicion: "",
    casa : ""

  };

  /*

  constructor(private heroeService : HeroeService, private activateRoute : ActivatedRoute) { 
    this.activateRoute.params.subscribe ( paramas =>{
      this.nombreh = paramas['nombreh'];
      this.indice = heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if(this.indice != -1){
        this.miheroe = heroeService.getUnHeroe(this.indice);
      }
    });
  }

  */

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute ) { 
    this.activatedRoute.params.subscribe(params => {
      this.nombreh = params['nombreh'];
      this.indice = heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);
      if (this.indice !== -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }else{
        window.setTimeout(function() {
          window.location.href = '/heroes';
      }, 15000);
      }
    });
  }


  ngOnInit(): void {

  }

}
