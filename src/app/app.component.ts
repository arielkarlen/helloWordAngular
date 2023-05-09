import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string
}

interface MenuOptions {
  texto:string,
  enlace:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
 public title = 'Mi primer APP en Angular';

 public ArregloTarjetas: Tarjeta[]=[]
 public MenuList: MenuOptions[]=[]

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:"Video 1", subtitulo: "Subtitulo video 1", image:"https://us.123rf.com/450wm/rarityassetclub/rarityassetclub2301/rarityassetclub230101243/197147257-representaci%C3%B3n-3d-de-un-oso-pardo-parado-en-un-lago-congelado-al-atardecer.jpg?ver=6"},
      {titulo:"Video 2", subtitulo: "Subtitulo video 2", image: "https://cdn0.bioenciclopedia.com/es/posts/2/0/1/oso_grizzly_102_600.jpg"},
      {titulo:"Video 3", subtitulo: "Subtitulo video 3", image:"https://okdiario.com/img/2019/06/22/osos-pardos.jpg"}
    ]

    this.MenuList =[
      {texto: "Opcion 1", enlace:"www.google.com"},
      {texto: "Opcion 2", enlace:"www.google.com"},
      {texto: "Opcion 3", enlace:"www.google.com"},
      {texto: "Opcion 4", enlace:"www.google.com"},
    ]
  }
}
