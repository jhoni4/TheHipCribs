import {Component, OnInit} from '@angular/core';
import { CribsService } from './../shared/services/cribs.service';
import { UtilService } from './../shared/services/util.service';
// import { SortByPipe } from '../pipes/sort-by.pipe';
import { Crib } from './../crib';

@Component({
  selector: 'jhi-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: [
    'card-listing.css'
  ]
})
export class CardListingComponent implements OnInit {
  cribs: Array<any> = [];
  error: any = '';
  sortField: any = 'price';
  sortDirection: any = 'asc';
  sortFields: Array<any> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  constructor(
    private cribsService: CribsService,
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.cribsService.getAllCribs()
      .subscribe(
        (data) => this.cribs = data,
        (error) => this.error = error.statusText
      );

    this.cribsService.newCribSubject.subscribe(
      (data) => this.cribs = [data, ...this.cribs]
    );
  }

}
