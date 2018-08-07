import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
 inputNumber: any;
 color: any;
 year: any[];
 url: any;
 flipped = false;
 show = false;


 card = new Card("","..","..","","","hello")

 // Format card number
 cardNumberFormatted(){
   let numberChunks = this.card.card_number.match(/.{1,4}/g)

   if(numberChunks){
     return numberChunks.join(' ');
   } else {
     return '';
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
   this.flipped = true;
  // console.log('flipped');
 }

 flipItY(){
   this.flipped = false;
 }

 changeColor(event: any){
   var type = event.target.value;

  if(type.startsWith('4')){
    this.color = '#1a1f71'
    this.url = 'https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Visa-Curved.png'
  } else if (type.startsWith('51')) {
    this.color = '#ff9900'
    this.url = 'https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png'
  } else if (type.startsWith('36')){
    this.color = '#002663'
    this.url = 'https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png'
  } else if (type.startsWith('37')){
    this.color = '#00a98f'
    this.url = 'https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Straight.png'
  } else {
    this.color = '#616161'
    this.url = ''
  }
  return type
 }


 ngOnInit(){
  this.year = this.years();
  // console.log(this.year);
 }

}