import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { CardsComponent } from './';

export const CARDS_ROUTE: Route = {
  path: 'cards',
  component: CardsComponent,
  data: {
    authorities: [],
    pageTitle: 'cards.title'
  },
  canActivate: [UserRouteAccessService]
};
