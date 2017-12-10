import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { AddListingComponent } from './';

export const ADD_LISTING_ROUTE: Route = {
  path: 'add-listing',
  component: AddListingComponent,
  data: {
    authorities: [],
    pageTitle: 'add-listing.title'
  },
  canActivate: [UserRouteAccessService]
};
