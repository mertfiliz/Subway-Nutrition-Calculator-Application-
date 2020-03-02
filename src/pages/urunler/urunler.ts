// Necessary libraries imported.
import { Component } from '@angular/core';
import { IonicPage, Modal, NavController, ModalController, Platform, ViewController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-urunler',
  templateUrl: 'urunler.html',
})
export class UrunlerPage {
  // 'sandvicler' page is the default page
  menuler : string = "sandvicler";
  // Variable declerations.
  gets: any;
  gets2: any;
  gets3: any;
  posts:any;
  url: string;
  url2:string;
  url3:string;
  headers: Headers;
  options: RequestOptions;

  constructor(private modal: ModalController, public platform: Platform, public nav: NavParams, public view: ViewController, private http: Http) {
    // service.php is for sandwiches.
    this.url = 'http://localhost/subway/service.php';
    // service2.php is for salads.
    this.url2 = 'http://localhost/subway/service2.php';
    // service3.php is for extras.
    this.url3 = 'http://localhost/subway/service3.php';

    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.options = new RequestOptions({
      headers: this.headers
    });
  }

  // This function creates a modal page for sandwiches. It takes the index of the selected sandwich and creates a new page called 'ModalSandvicPage'.
  openModalSandvic(characterNum) {
    let modal = this.modal.create('ModalSandvicPage', characterNum);
    modal.present();
  } 
  
  // This function creates a modal page for salads. It takes the index of the selected salad and creates a new page called 'ModalSalatalarPage'.
  openModalSalatalar(characterNum, extNum) {
    let modal = this.modal.create('ModalSalatalarPage', characterNum);
    modal.present();
  } 
  
  // This function called when 'besin değerleri' segment clicked. It calls 'sandviclerGet()', 'salatalarGet()' and 'extralarGet()' functions.
  requestGet(){       
    this.sandviclerGet();
    this.salatalarGet();
    this.extralarGet();
  }

  // This function is used for getting 'sandwiches' values from 'service.php' as a json object.
  sandviclerGet() {
    this.http.get(this.url, this.options).map(result => result.json()).subscribe(key => {     
      this.gets = key;
      console.log(key);
    }, (err) => {
     // console.error(err);
    });
  }

  // This function is used for getting 'salads' values from 'service2.php' as a json object.
  salatalarGet() {
    this.http.get(this.url2, this.options).map(result => result.json()).subscribe(key => {     
      this.gets2 = key;
      console.log(key);
    }, (err) => {
     // console.error(err);
    });
  } 

  // This function is used for getting 'extras' values from 'service3.php' as a json object.
  extralarGet() {
    this.http.get(this.url3, this.options).map(result => result.json()).subscribe(key => {     
      this.gets3 = key;
      console.log(key);
    }, (err) => {
     // console.error(err);
    });
  } 
  
  // This function starts when application is loaded. It calles the 'sandviclerGet()' function. Because it is our default page and we want to list all results initially.
  ionViewDidLoad() {
    this.sandviclerGet(); 
  }
}