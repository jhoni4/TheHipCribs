import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThehipcribsSharedModule } from '../shared';

import { ADD_LISTING_ROUTE, AddListingComponent } from './';

@NgModule({
    imports: [
      ThehipcribsSharedModule,
      RouterModule.forRoot([ ADD_LISTING_ROUTE ], { useHash: true })
    ],
    declarations: [
      AddListingComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThehipcribsAppAddListingModule {}
