import { Component } from '@angular/core';

interface Navbarlist{
  titulo:string,
  ruta:string,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .navegador{
       
      background-color: rgba(0, 0, 0, 0.25)
    }
  `
  ]
})

export class MenuComponent {

  navbarlist : Navbarlist[]=[
    {
      titulo:'home',
      ruta:'/tiburones/home'
    },
    {
      titulo:'contacto',
      ruta:'/tiburones/contacto'
    },
    {
      titulo:'testimonios',
      ruta:'/tiburones/testimonios'
    }
  ]


}
