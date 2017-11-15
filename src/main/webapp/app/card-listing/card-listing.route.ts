import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { CardListingComponent } from './';

export const CARD_LISTING_ROUTE: Route = {
  path: 'card-listing',
  component: CardListingComponent,
  data: {
    authorities: [],
    pageTitle: 'card-listing.title'
  },
  canActivate: [UserRouteAccessService]
};
