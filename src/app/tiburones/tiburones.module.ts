import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiburonesRoutingModule } from './tiburones-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    TestimoniosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    TiburonesRoutingModule
  ]
})
export class TiburonesModule { }
