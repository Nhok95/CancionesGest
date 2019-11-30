import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AltaComponent } from './components/alta/alta.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
      {path:'', redirectTo: 'home', pathMatch: 'full'},  // redirección a com1 si el usuario no pone nada
      {path: 'home', component: HomeComponent},
      {path: 'alta', component: AltaComponent},
      {path: 'list', component: ListComponent},
      {path: 'edit/:codigo', component: EditComponent},
      {path: '**', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
