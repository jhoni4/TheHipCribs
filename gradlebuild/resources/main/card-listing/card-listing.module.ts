import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThehipcribsSharedModule } from '../shared';

import { CARD_LISTING_ROUTE, CardListingComponent } from './';
import { CrdsComponent } from './crds/crds.component';

@NgModule({
    imports: [
      ThehipcribsSharedModule,
      RouterModule.forRoot([ CARD_LISTING_ROUTE ], { useHash: true })
    ],
    declarations: [
      CardListingComponent,
      CrdsComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThehipcribsAppCardListingModule {}
