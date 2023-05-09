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
      {titulo:"Video 1", subtitulo: "Subtitulo video 1", image:"http://images.gofreedownload.net/the-lord-of-the-rings-the-battle-for-middle-earth-ii-addon-30286.jpg"},
      {titulo:"Video 2", subtitulo: "Subtitulo video 2", image: "http://images.gofreedownload.net/the-lord-of-the-rings-the-battle-for-middle-earth-ii-29163.jpg"},
      {titulo:"Video 3", subtitulo: "Subtitulo video 3", image:"http://images.gofreedownload.net/the-lord-of-the-rings-conquest-37993.jpg"}
    ]

    this.MenuList =[
      {texto: "Opcion 1", enlace:"www.google.com"},
      {texto: "Opcion 2", enlace:"www.google.com"},
      {texto: "Opcion 3", enlace:"www.google.com"},
      {texto: "Opcion 4", enlace:"www.google.com"},
    ]
  }
}
