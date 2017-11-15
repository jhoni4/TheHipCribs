import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { ThehipcribsSharedModule, UserRouteAccessService } from './shared';
import { ThehipcribsHomeModule } from './home/home.module';
import { ThehipcribsAdminModule } from './admin/admin.module';
import { ThehipcribsAccountModule } from './account/account.module';
import { ThehipcribsEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import { ThehipcribsAppCardListingModule } from './card-listing/card-listing.module';
import { ThehipcribsAppAddListingModule } from './add-listing/add-listing.module';
import { ThehipcribsAppCardsModule } from './cards/cards.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ThehipcribsSharedModule,
        ThehipcribsHomeModule,
        ThehipcribsAdminModule,
        ThehipcribsAccountModule,
        ThehipcribsEntityModule,
        ThehipcribsAppCardListingModule,
        ThehipcribsAppAddListingModule,
        ThehipcribsAppCardsModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ThehipcribsAppModule {}
