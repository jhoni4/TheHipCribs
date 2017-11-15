import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: [
    'add-listing.css'
  ]
})
export class AddListingComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'AddListingComponent message';
  }

  ngOnInit() {
  }

}
