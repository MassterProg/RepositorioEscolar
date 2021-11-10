import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

import { AutorComponent } from './components/autor/autor.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CentroComponent } from './components/centro/centro.component';
import { MateriaComponent } from './components/materia/materia.component';
import { TemaComponent } from './components/tema/tema.component';
import { FechaComponent } from './components/fecha/fecha.component';


const routes: Routes = [
  { path: "", redirectTo:"/paginaprincipal", pathMatch:"full"},
  { path:'paginaprincipal', component:HomeComponent},
  { path:'login', component:LoginComponent },
  { path:'registro', component: RegisterComponent },
  { path:'portafolio', component:PortafolioComponent },
  { path:'busqueda', component:BusquedaComponent },
  { path:'autor', component:AutorComponent },
  { path:'carrera', component:CarreraComponent },
  { path:'centro', component:CentroComponent },
  { path:'materia', component:MateriaComponent },
  { path:'tema', component:TemaComponent },
  { path:'fecha', component:FechaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
