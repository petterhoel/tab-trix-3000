import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entry',
    loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule)
  },
  {
    path: 'elsewhere',
    loadChildren: () => import('./elsewhere/elsewhere.module').then(m => m.ElsewhereModule)
  },
  {
    path: '',
    redirectTo: '/entry',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/elsewhere',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
