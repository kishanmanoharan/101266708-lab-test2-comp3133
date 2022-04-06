import { Component, OnInit } from '@angular/core';
import { SpacexmissionsService } from '../spacexmissions.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent {
  public missions: any;
  response: any;

  constructor(private spacexmissionservice: SpacexmissionsService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.missions = this.spacexmissionservice.fetch();
  }
}
