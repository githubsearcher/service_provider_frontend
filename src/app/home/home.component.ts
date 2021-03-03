import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/isp.service';
import { MatDialog } from '@angular/material/dialog';
import * as htmlToImage from 'html-to-image';
import { SharepopupComponent } from './../sharepopup/sharepopup.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serviceProdiverList = [];
  searchKeyWord = '';
  sortType = '';
  orderBy;
  providerDetail;
  apiHits = 0;
  loader: Boolean = true;
  constructor(private readonly httpService: HttpService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getListOfServices();
  }

  // get the list of internet service provider
  getListOfServices() {
    this.loader = true;
    this.httpService.getInternetServiceData().subscribe((res: any) => {
      if(res) {
      this.loader = false;
      this.apiHits = res['count'];
      this.serviceProdiverList = res['data'];
      this.providerDetail = this.serviceProdiverList[0];
      }
    }, (err) => {
      this.loader = false;
      console.log('error', err);
    })
  }

  // reset the search field value
  resetFilter() {
    this.searchKeyWord = '';
  }

  // sort by Ascending  and Descending
  changeSortOrder() {
    if(this.orderBy == undefined) {
      this.orderBy = true;
    }
    this.orderBy = !this.orderBy;
  }

  // description or information of particular ISP
  showDetail(provider) {
    this.providerDetail = provider;
  }

  // download provider deatils
  downloadImage() {
    htmlToImage.toJpeg(document.getElementById('provider-detail-image'), { quality: 0.95, backgroundColor: '#f1f1f1'})
    .then((dataUrl) => {
    var link = document.createElement('a');
    link.download = `${this.providerDetail.name}.jpeg`;
    link.href = dataUrl;
    link.click();
  });
  }

  // open share popup box
    openDialog() {
      const data = document.querySelector(".isp__details__container");
      let postUrl = encodeURI(document.location.href);
      let postTitle = encodeURI("Hi everyone, please check this out: ");
      let dialogRef = this.dialog.open(SharepopupComponent, {
        data: {
          content: data,
          url: postUrl,
          title: postTitle
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
      });
    }
}
