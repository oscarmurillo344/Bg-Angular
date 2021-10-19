import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './Componentes/Principal/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentesModule } from '../modulo-material/material-componentes.module';
import { NavlateralComponent } from './Componentes/NavLateral/navlateral.component';
import { DataMenuService } from './Servicios/data-menu.service';
import { HomeComponent } from './Componentes/home/home.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavlateralComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MaterialComponentesModule
  ],
  providers: [
    DataMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
