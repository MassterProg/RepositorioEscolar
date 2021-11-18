import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AutorComponent } from './components/autor/autor.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CentroComponent } from './components/centro/centro.component';
import { MateriaComponent } from './components/materia/materia.component';
import { TemaComponent } from './components/tema/tema.component';
import { FechaComponent } from './components/fecha/fecha.component';
import { NormativasComponent } from './components/normativas/normativas.component';
import { CreditosComponent } from './components/creditos/creditos.component';

const routes: Routes = [
  { path: "", redirectTo:"/login", pathMatch:"full"},
  { path:'paginaprincipal', component:HomeComponent},
  { path:'login', component:LoginComponent },
  { path:'registro', component: RegisterComponent },
  { path:'busqueda', component:BusquedaComponent },
  { path:'autor', component:AutorComponent },
  { path:'carrera', component:CarreraComponent },
  { path:'centro', component:CentroComponent },
  { path:'materia', component:MateriaComponent },
  { path:'tema', component:TemaComponent },
  { path:'fecha', component:FechaComponent },
  { path:'normativas', component:NormativasComponent },
  { path:'creditos', component:CreditosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
