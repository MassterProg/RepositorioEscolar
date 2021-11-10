import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortafolioComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    BusquedaComponent,
    AutorComponent,
    CarreraComponent,
    CentroComponent,
    MateriaComponent,
    TemaComponent,
    FechaComponent,
<<<<<<< HEAD
    NormativasComponent
=======
    RegisterComponent
>>>>>>> a9b6b65e5f8b93aa5bff63fc7d8a562260eaa051
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
