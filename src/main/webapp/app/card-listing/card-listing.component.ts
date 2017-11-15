import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: [
    'card-listing.css'
  ]
})
export class CardListingComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'CardListingComponent message';
  }

  ngOnInit() {
  }

}
