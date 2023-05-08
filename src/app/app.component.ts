import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
 public title = 'Mi primer APP en Angular';

  public ArregloTarjetas: Tarjeta[]=[]

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:"Video 1", subtitulo: "Subtitulo"},
      {titulo:"Video 2", subtitulo: "Subtitulo"},
      {titulo:"Video 3", subtitulo: "Subtitulo"}
    ]
  }
}
