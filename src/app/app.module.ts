import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimeInterceptor } from './interceptors/time.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { QuicklinkModule } from 'ngx-quicklink';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './NGRX/models/state';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ROOT_EFFECTS } from './NGRX/effects/root.effects';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    QuicklinkModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
    EffectsModule.forRoot(ROOT_EFFECTS),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [
    CookieService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
