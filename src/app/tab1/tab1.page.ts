import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data:any = [];
public   load: any;

constructor(public http: HttpClient) {
  //this.present()
  this.http.get('http://yarldeepam.com/wp-json/wp/v2/posts')
  .subscribe(data => {
   console.log(data)
   this.data = data;
  // this.dismiss()
  }, err => {
    console.log(err);
  });
}

present() {
  // this.load = this.loader.create({
  //   spinner: 'hide',
  //   content: `
  //   <div class="spinner">
  //   <div class="rect1"></div>
  //   <div class="rect2"></div>
  //   <div class="rect3"></div>
  //   <div class="rect4"></div>
  //   <div class="rect5"></div>
  // </div>`
  //   //content: 'Loading Please Wait...'

  // });
  // this.load.present();
}
dismiss() {
  this.load.dismiss();
}
}

