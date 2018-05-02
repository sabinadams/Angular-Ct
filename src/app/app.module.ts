import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ElModule } from 'element-angular'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/components/sidenav/sidenav'
import { BreedCountsComponent } from './pages/dashboard/breedcounts/breedcounts'
import { BullListingComponent } from './shared/components/bulllisting'

import { DashboardPage } from './pages/dashboard/dashboard'
import { DefaultPage } from './shared/components/default-page'
import { SireDirectoryPage } from './pages/siredirectory/siredirectory'
import { AdvancedSearchPage } from './pages/advancedsearch/advancedsearch'

import { AuthInterceptor } from './shared/interceptors/authInterceptor'
import { AppVersionInterceptor } from './shared/interceptors/appVersionInterceptor'
import { ProxyInterceptor } from './shared/interceptors/proxyInterceptor'

import { DataService } from './shared/services/dataService'


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BreedCountsComponent,
    BullListingComponent,
    DashboardPage,
    DefaultPage,
    SireDirectoryPage,
    AdvancedSearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppVersionInterceptor, multi: true },
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
