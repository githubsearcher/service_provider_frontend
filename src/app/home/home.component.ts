import { Component, OnInit } from '@angular/core';
import { InternetService } from './../services/isp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private readonly internetService: InternetService) { }

  ngOnInit() {
    this.getListOfServices();
  }

  getListOfServices() {

  }
}
