import { Component, OnInit, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit{

  
  // @Input recibe datos, @Output envia datos
  @Input() dataEntrante:any;

  ngOnInit(): void {
  
}

}

