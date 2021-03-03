import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-sharepopup',
  templateUrl: './sharepopup.component.html',
  styleUrls: ['./sharepopup.component.scss']
})
export class SharepopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SharepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    }

  ngOnInit() {
    let postUrl = this.data.url;
    let postTitle = this.data.title;
    const facebookBtn = document.querySelector(".facebook-btn");
    const twitterBtn = document.querySelector(".twitter-btn");
    const linkedinBtn = document.querySelector(".linkedin-btn");
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    if (this.data) {

    // Social Share Links
    facebookBtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
  
    twitterBtn.setAttribute(
      "href",
      `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
  
  
    linkedinBtn.setAttribute(
      "href",
      `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
  
    whatsappBtn.setAttribute(
      "href",
      `https://wa.me/?text=${postTitle} ${postUrl}`
    );
    }
  }

}
