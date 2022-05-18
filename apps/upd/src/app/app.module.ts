import { NgModule } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { I18nModule } from '@dua-upd/upd/i18n';

import {
  DateSelectionEffects,
  DateSelectionFacade,
  dateSelectionReducer,
  i18nReducer,
  I18nEffects,
  I18nFacade,
} from '@dua-upd/upd/state';

import { environment } from '../environments/environment';
import { PathPreserveQueryLocationStrategy } from '@dua-upd/upd/services';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    I18nModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        dateSelection: dateSelectionReducer,
        router: routerReducer,
        i18n: i18nReducer,
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([DateSelectionEffects, I18nEffects]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    DateSelectionFacade,
    I18nFacade,
    { provide: LocationStrategy, useClass: PathPreserveQueryLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
