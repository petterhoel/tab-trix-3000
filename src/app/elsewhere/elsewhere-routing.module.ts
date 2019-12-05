import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElsewhereComponent } from './elsewhere.component';

const routes: Routes = [{ path: '', component: ElsewhereComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElsewhereRoutingModule { }
