import { Component } from '@angular/core';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.css']
})

export class GendersComponent {

  //URL BASE
  urlBase:string = "http://localhost:8080/"

  //LISTADO DE ARTISTAS
  generos:{id:number, nombre:string}[]=[]

  async ngOnInit(){
    const respuesta = await fetch(this.urlBase + 'genders');
    const respuesta2 = await respuesta.json();
    this.generos=respuesta2
    console.log(this.generos)
  }
}