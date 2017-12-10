import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThehipcribsSharedModule } from '../shared';

import { CARDS_ROUTE, CardsComponent } from './';

@NgModule({
    imports: [
      ThehipcribsSharedModule,
      RouterModule.forRoot([ CARDS_ROUTE ], { useHash: true })
    ],
    declarations: [
      CardsComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThehipcribsAppCardsModule {}
