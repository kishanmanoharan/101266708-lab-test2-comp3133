import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { SpacexmissionsService } from './spacexmissions.service';

@NgModule({
  declarations: [AppComponent, MissiondetailsComponent, MissionlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,

    RouterModule.forRoot([
      { path: '', component: MissionlistComponent },
      {
        path: 'details/:id',
        component: MissiondetailsComponent,
      },
    ]),
  ],
  providers: [SpacexmissionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
