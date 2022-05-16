import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/Heroe';
import { HeroeService } from '../../shared/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  misHeroes :  Heroe[] = [];
  constructor(public miServicio: HeroeService) {
    console.log("Constructor Heroes Component");
    this.misHeroes = miServicio.getHeroes();
    console.log(this.misHeroes);
   }

  ngOnInit(): void {
    console.log("ngOnInit de Heroes Component ");
  }

}
