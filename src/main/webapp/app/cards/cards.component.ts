import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-cards',
  templateUrl: './cards.component.html',
  styleUrls: [
    'cards.css'
  ]
})
export class CardsComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'CardsComponent message';
  }

  ngOnInit() {
  }

}
