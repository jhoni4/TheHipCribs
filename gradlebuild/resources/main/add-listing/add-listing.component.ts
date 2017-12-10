import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../shared/services/cribs.service';
import { UtilService } from './../shared/services/util.service';

@Component({
  selector: 'jhi-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: [
    'add-listing.css'
  ]
})
export class AddListingComponent implements OnInit {
  @ViewChild('newCribForm') newCribForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService,
  ) {
  }

  ngOnInit() {
  }
  onCribSubmit(data) {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }
}
