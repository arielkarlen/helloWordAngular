import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://m.media-amazon.com/images/I/917-4I7qNfL._CR0,325,1735,1735_UX256.jpg"
  public Titulo:string = "Titulo de la card"
}
