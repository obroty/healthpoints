import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefibrilatorsComponent } from './defibrilators/defibrilators.component';
import { MapComponent } from './map/map.component';
import { DefibrilatorDetailComponent } from './defibrilator-detail/defibrilator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DefibrilatorsComponent,
    MapComponent,
    DefibrilatorDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyC_14PhB8nYt-Oq96VEoL3x9W7nS0dCyVg'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
