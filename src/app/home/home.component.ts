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
//     git remote add origin https://github.com/githubsearcher/service_provider_frontend.git
// git push -u origin main
    this.getListOfServices();
  }

  getListOfServices() {

  }
}
