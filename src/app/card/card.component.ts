import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
 cards: Card[] = [];
 inputNumber: any;
 year: any[];
flipped = false;
 
 @Output() cardSelected = new EventEmitter<Card>()
 card = new Card("","..","..","","...","hello")

 // Format card number
 cardNumberFormatted(){
   let numberChunks = this.card.card_number.match(/.{1,4}/g)

   if(numberChunks){
     return numberChunks.join(' ');
   } else {
     return '';
   }
 }

 // show card expiration date
 cardExpiration(){
   if (!this.card.card_month || !this.card.card_year){
     return '';
   } else {
     return this.card.card_month + '/' + this.card.card_year;
   }
 }

 // return months
 months = [
    '01', '02', '03', '04',
    '05', '06', '07', '08',
    '09', '10', '11', '12'
   ];

 // return years
 years(){
   let years = [];
   let currentYear = (new Date()).getFullYear() % 2000;

   for(let i = 0; i < 18; i++){
     years.push(currentYear + i);
   }
   return years;
 }

 flipIt() {
   this.flipped = !this.flipped;
  // console.log('flipped');
 }

 ngOnInit(){
  this.year = this.years();
  console.log(this.year);
 }
}