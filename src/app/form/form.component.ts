import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'
import { Card } from '../card'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() card: Card;
  inputNumber: string;
 
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.inputNumber = message)
  }

}
