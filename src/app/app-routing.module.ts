import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SallesComponent} from './salles/salles.component';
import {EvenementsComponent} from './evenements/evenements.component';
import {ReservationComponent} from './reservation/reservation.component';
import {EspaceEtudiantComponent} from './espace-etudiant/espace-etudiant.component';
import {EspaceProfesseurComponent} from './espace-professeur/espace-professeur.component';
import {EspaceAdminComponent} from './espace-admin/espace-admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'salles', component: SallesComponent},
  {path: 'events', component: EvenementsComponent},
  {path: 'reservations', component: ReservationComponent},
  {path: 'etudiant', component: EspaceEtudiantComponent},
  {path: 'prof', component: EspaceProfesseurComponent},
  {path: 'admin', component: EspaceAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
