import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { 
    path:'tiburones',
    loadChildren:()=>import('./tiburones/tiburones.module').then(m=>m.TiburonesModule),
  },
  { 
    path:'**',
    redirectTo:'tiburones'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
