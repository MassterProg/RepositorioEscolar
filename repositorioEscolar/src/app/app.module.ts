import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
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
//importaciones parar firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NormativasComponent } from './components/normativas/normativas.component';

import { environment } from '../environments/environment';
import { CreditosComponent } from './components/creditos/creditos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    RegisterComponent,
    NormativasComponent,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
