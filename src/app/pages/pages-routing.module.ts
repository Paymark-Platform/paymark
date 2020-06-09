import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { NotFoundComponent } from './templates/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'landing',
      loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule)
    },
    {
      path: 'stuff',
      loadChildren: () => import('./stuff/stuff.module').then((m) => m.StuffModule)
    },
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
