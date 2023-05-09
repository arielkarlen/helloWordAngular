import { Component, OnInit, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {


  // @Input recibe datos, @Output envia datos
  @Input() dataEntrante:any;


}

