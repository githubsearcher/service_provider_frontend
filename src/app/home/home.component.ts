import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchService } from './../services/spaceXlaunch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private readonly spaceXService: SpaceXLaunchService) { }

  ngOnInit() {
    this.getListOfServices();
  }

  getListOfServices() {

  }
}
