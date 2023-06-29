import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOperComponent } from './components/add-oper/add-oper.component';

const routes: Routes = [
  {path: '', component: AddOperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
