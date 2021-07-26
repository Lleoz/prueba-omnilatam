import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './business/store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './business/store/effects';
import { CarService } from './services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonTablePipe } from './pipe/json-table.pipe';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CardComponent,
    CatalogoComponent,
    JsonTablePipe,
    CarouselComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    RouterModule,
    NgbModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
