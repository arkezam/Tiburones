import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';

const routes: Routes = [

  {path: '',
    children:[
      {path: 'home', component:HomeComponent},
      {path: 'contacto', component:ContactoComponent},
      {path: 'testimonios', component:TestimoniosComponent},
      {path: '**', redirectTo:'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiburonesRoutingModule { }
