import { Component, Input } from '@angular/core';
// import { Crib } from './../../crib';

@Component({
  selector: 'jhi-crds',
  templateUrl: './crds.component.html',
  styleUrls: [
    'crds.css'
  ]
})
export class CrdsComponent {
  @Input('crib') crib: any;

  constructor() { }

}
