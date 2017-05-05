import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/pages/index.html',
  styleUrls: ['app/css/style.css']
})

export class AppComponent  {
  name = 'Angular';
  version = 2;
  heroes = HEROES;
  selectedHero:Hero = {id:0,name:""};
  onselect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero.name);
  }
}

const HEROES: Array<Hero> = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export class Hero {
  id: number;
  name: string;
}

