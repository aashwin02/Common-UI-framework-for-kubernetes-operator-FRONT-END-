import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login' , component: LoginComponent} ,
  { path: 'dashboard' , component: DashboardComponent} ,
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => 
      import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  { path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
