import { Component, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 cards: Card[] = [];
 @Output() cardSelected = new EventEmitter<Card>()
 card = new Card(".... .... .... ....","..","..","..... .....","...","hello")

 onSelected(card: Card){
   this.cardSelected.emit(card);
 }
}
