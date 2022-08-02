import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CasosExitoComponent } from './pages/casos-exito/casos-exito.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: '', component:InicioComponent},
  {path: 'equipo', component:EquipoComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'casos-exito', component:CasosExitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: "ignore",
    useHash:false,
    anchorScrolling:"enabled",
    scrollPositionRestoration:"enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
