import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'registro', component: RegisterComponent },
  { path:'portafolio', component:PortafolioComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
