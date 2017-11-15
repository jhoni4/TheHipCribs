import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThehipcribsSharedModule } from '../shared';

import { CARD_LISTING_ROUTE, CardListingComponent } from './';

@NgModule({
    imports: [
      ThehipcribsSharedModule,
      RouterModule.forRoot([ CARD_LISTING_ROUTE ], { useHash: true })
    ],
    declarations: [
      CardListingComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThehipcribsAppCardListingModule {}
