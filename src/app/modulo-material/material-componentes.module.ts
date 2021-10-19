import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';


const ModulosMaterial = [
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule,
  MatBadgeModule,
  MatMenuModule
]

@NgModule({
  imports: [
    ModulosMaterial
  ],
  exports:[
    ModulosMaterial
  ]
})
export class MaterialComponentesModule { }
