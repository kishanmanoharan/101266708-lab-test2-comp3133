import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexmissionsService } from '../spacexmissions.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission?: Mission;

  constructor(
    private spacexmissionservice: SpacexmissionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mission = this.spacexmissionservice.getMissionById(parseInt(id));
    }
  }
}
