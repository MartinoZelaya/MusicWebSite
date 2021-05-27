import { Component } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  //URL BASE
  urlBase:string = "http://localhost:8080/"

  //LISTADO DE ARTISTAS
  artistas:{id:number, nombre:string, fechaNacimiento:Date, foto:string, nacionalidad:string}[]=[]

  unArtista:{id:number, nombre:string, fechaNacimiento:Date, foto:string, nacionalidad:string}[]=[]

  async ngOnInit(){
    const respuesta = await fetch(this.urlBase + 'artist');
    const respuesta2 = await respuesta.json();
    this.artistas=respuesta2
    console.log(this.artistas)
  }

  //ENVIAR LOS DATOS PARA OBTENER SOLO UNA MASCOTA
  async modalData(id:number){
    
    let modalArtista = id;

    console.log(modalArtista);

    fetch(this.urlBase + `modalartist/${modalArtista}`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then((res) => console.log(res))
    .catch(error => console.log(error))

      //LISTAR LA MASCOTA EN EL MODAL
      const unArtist = await fetch(this.urlBase + `modalartist/${modalArtista}`);
      const mostrarArtista = await unArtist.json();
      this.unArtista=mostrarArtista
      console.log(this.unArtista)
  }
}
