import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefibrilatorsComponent } from './defibrilators/defibrilators.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'defibrilators', component: DefibrilatorsComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
