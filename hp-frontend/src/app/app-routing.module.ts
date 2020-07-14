import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefibrilatorsComponent } from './defibrilators/defibrilators.component';

const routes: Routes = [
  { path: 'defibrilators', component: DefibrilatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
