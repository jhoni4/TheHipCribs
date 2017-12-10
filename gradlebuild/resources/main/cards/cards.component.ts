import {Component, Input} from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'jhi-cards',
  templateUrl: './cards.component.html',
  styleUrls: [
    'cards.css'
  ]
})
export class CardsComponent {
  @Input('crib') crib: Crib;


  constructor() {
  }

  ngOnInit() {
  }

}
