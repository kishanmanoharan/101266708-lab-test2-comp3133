import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from './models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpacexmissionsService {
  missions$: any;
  public missions: Mission[] = [];

  constructor(private http: HttpClient) {}

  fetchRawData(): Observable<Object> {
    return this.http.get('https://api.spacexdata.com/v3/launches');
  }

  fetch() {
    this.missions$ = this.fetchRawData();
    return this.getMissionsData();
  }

  getMissionsData(): Mission[] {
    this.missions$.forEach((element: any) => {
      element.forEach((mission: any) => {
        let newMission: Mission = {
          flight_number: mission.flight_number,
          mission_name: mission.mission_name,
          mission_patch_small: mission.links.mission_patch_small,
          details: mission.details,
          launch_year: mission.launch_year,
        };
        this.missions.push(newMission);
      });
    });
    return this.missions;
  }

  getMissionById(id: number): any {
    return this.fetch().find((mission) => mission.flight_number == id);
  }
}
