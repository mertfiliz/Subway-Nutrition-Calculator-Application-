// Necessary libraries imported.
import { Component } from '@angular/core';
import { IonicPage, AlertController, Modal, NavController,ModalController, Platform, ViewController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

// global variable
declare var global: any;

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal-sandvic.html',
}) 

export class ModalSandvicPage {  
  // VARIABLE DECLARATIONS
  character;
  extra;
  bread_nutrition;
  veggies_nutrition;
  sauces_nutrition;
  gets: any;
  gets1:any;
  posts:any;
  url: string;
  url3:string;
  headers: Headers;
  options: RequestOptions;
  characters: any;
  extras:any;

  // BREAD VALUES DECLARATIONS
  b_name:any;
  b_cal:any;
  b_prot:any;
  b_carb:any;
  b_fat:any;
  b_pts:any;

  // ALL VEGGIE NAMES AND NUTRITION VARIABLES DECLARATIONS
  veggies1_selected:boolean; veggies1_name:any; veggies1_calories:number; veggies1_protein:number; veggies1_carb:number; veggies1_fat:number; veggies1_pts:number;
  veggies2_selected:boolean; veggies2_name:any; veggies2_calories:number; veggies2_protein:number; veggies2_carb:number; veggies2_fat:number; veggies2_pts:number;
  veggies3_selected:boolean; veggies3_name:any; veggies3_calories:number; veggies3_protein:number; veggies3_carb:number; veggies3_fat:number; veggies3_pts:number;
  veggies4_selected:boolean; veggies4_name:any; veggies4_calories:number; veggies4_protein:number; veggies4_carb:number; veggies4_fat:number; veggies4_pts:number;
  veggies5_selected:boolean; veggies5_name:any; veggies5_calories:number; veggies5_protein:number; veggies5_carb:number; veggies5_fat:number; veggies5_pts:number;
  veggies6_selected:boolean; veggies6_name:any; veggies6_calories:number; veggies6_protein:number; veggies6_carb:number; veggies6_fat:number; veggies6_pts:number;
  veggies7_selected:boolean; veggies7_name:any; veggies7_calories:number; veggies7_protein:number; veggies7_carb:number; veggies7_fat:number; veggies7_pts:number;
  veggies8_selected:boolean; veggies8_name:any; veggies8_calories:number; veggies8_protein:number; veggies8_carb:number; veggies8_fat:number; veggies8_pts:number;
  veggies9_selected:boolean; veggies9_name:any; veggies9_calories:number; veggies9_protein:number; veggies9_carb:number; veggies9_fat:number; veggies9_pts:number;

  // TOTAL VEGGIE NUTRITION VARIABLES DECLARATIONS
  veggies_total_calories:number; veggies_total_protein:number; veggies_total_carb:number; veggies_total_fat:number; veggies_total_pts:number;

  // SAUCES NAMES AND NUTRITION VARIABLES DECLARATIONS
  sauces1_selected:boolean; sauces1_name:any; sauces1_calories:number; sauces1_protein:number; sauces1_carb:number; sauces1_fat:number; sauces1_pts:number;
  sauces2_selected:boolean; sauces2_name:any; sauces2_calories:number; sauces2_protein:number; sauces2_carb:number; sauces2_fat:number; sauces2_pts:number;
  sauces3_selected:boolean; sauces3_name:any; sauces3_calories:number; sauces3_protein:number; sauces3_carb:number; sauces3_fat:number; sauces3_pts:number;
  sauces4_selected:boolean; sauces4_name:any; sauces4_calories:number; sauces4_protein:number; sauces4_carb:number; sauces4_fat:number; sauces4_pts:number;
  sauces5_selected:boolean; sauces5_name:any; sauces5_calories:number; sauces5_protein:number; sauces5_carb:number; sauces5_fat:number; sauces5_pts:number;
  sauces6_selected:boolean; sauces6_name:any; sauces6_calories:number; sauces6_protein:number; sauces6_carb:number; sauces6_fat:number; sauces6_pts:number;
  sauces7_selected:boolean; sauces7_name:any; sauces7_calories:number; sauces7_protein:number; sauces7_carb:number; sauces7_fat:number; sauces7_pts:number;
  sauces8_selected:boolean; sauces8_name:any; sauces8_calories:number; sauces8_protein:number; sauces8_carb:number; sauces8_fat:number; sauces8_pts:number;
  sauces9_selected:boolean; sauces9_name:any; sauces9_calories:number; sauces9_protein:number; sauces9_carb:number; sauces9_fat:number; sauces9_pts:number;
  sauces10_selected:boolean; sauces10_name:any; sauces10_calories:number; sauces10_protein:number; sauces10_carb:number; sauces10_fat:number; sauces10_pts:number;
  sauces11_selected:boolean; sauces11_name:any; sauces11_calories:number; sauces11_protein:number; sauces11_carb:number; sauces11_fat:number; sauces11_pts:number;
  sauces12_selected:boolean; sauces12_name:any; sauces12_calories:number; sauces12_protein:number; sauces12_carb:number; sauces12_fat:number; sauces12_pts:number;
  sauces13_selected:boolean; sauces13_name:any; sauces13_calories:number; sauces13_protein:number; sauces13_carb:number; sauces13_fat:number; sauces13_pts:number;

  // TOTAL SAUCES NUTRITION VARIABLES DECLARATIONS
  sauces_total_calories:number; sauces_total_protein:number; sauces_total_carb:number; sauces_total_fat:number; sauces_total_pts:number;

  // TOTAL CALORIES OF ALL VARIABLES DECLARATIONS
  total_calories:number; total_protein:number;  total_carb:number; total_fat:number;  total_pts:number; 

  constructor(
    // Necessarary libraries called in constructor.
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modal: ModalController,
    private http: Http,
    public alertCtrl: AlertController
  ) {
    
    // CHECKBOXES OF VEGGIES ARE INITIALLY NOT SELECTED.
    this.veggies1_selected = false;
    this.veggies2_selected = false;
    this.veggies3_selected = false;
    this.veggies4_selected = false;
    this.veggies5_selected = false;
    this.veggies6_selected = false;
    this.veggies7_selected = false;
    this.veggies8_selected = false;
    this.veggies9_selected = false;

    // CHECKBOXES OF SAUCES ARE INITIALLY NOT SELECTED.
    this.sauces1_selected = false;
    this.sauces2_selected = false;
    this.sauces3_selected = false;
    this.sauces4_selected = false;
    this.sauces5_selected = false;
    this.sauces6_selected = false;
    this.sauces7_selected = false;
    this.sauces8_selected = false;
    this.sauces9_selected = false;
    this.sauces10_selected = false;
    this.sauces11_selected = false;
    this.sauces12_selected = false;
    this.sauces13_selected = false;
    
    // service.php for Sandwiches
    this.url = 'http://localhost/subway/service.php';
    // service3.php for Extras
    this.url3 = 'http://localhost/subway/service3.php';

    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.options = new RequestOptions({
      headers: this.headers
    });

    // I declared all values we needed in this page as arrays. Then i set them as empty strings. This means when program runs, constructor sets these values to empty variables.
    // All product information is initially empty. (127 - 289)
    this.characters = [
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',    
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',   
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',       
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '', 
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',    
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',  
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',      
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',     
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',      
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',  
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '', 
      },

      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '', 
      },
  
      {
        name: '',
        image: '',    
        calories: '',
        protein: '',
        carb: '',
        fat: '',
        pts: '',    
      },
  
      
    ];

    // All bread nutrition information are initally empty. (292 - 349)
    this.bread_nutrition = [
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      },
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      },
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      },
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      },
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      },
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      },
      {
        bread_name: '',
        bread_calories: '',
        bread_carb: '',
        bread_fat: '',
        bread_protein: '',
        bread_potasium: '',
      }
    ];

    // All veggies nutrition information are initially empty. (352 - 434)
    this.veggies_nutrition = [
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
      {
        veggies_name: '',
        veggies_calories: '',
        veggies_carb: '',
        veggies_fat: '',
        veggies_protein: '',
        veggies_potasium: '',
        veggies_selected: '',
      },
    ];

    // All sauces nutrition information are initially empty. (437 - 550)
    this.sauces_nutrition = [
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },      
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },      
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      },
      {
        sauces_name: '',
        sauces_calories: '',
        sauces_carb: '',
        sacues_fat: '',
        sacues_protein: '',
        sauces_potasium: '',        
      }     
    ];
  
    // All names of breads, veggies and sauces are initiall empty. (553 - 593)
    this.extras = [
      {
        bread1: '', 
        bread2: '',
        bread3: '', 
        bread4: '',
        bread5: '',
        bread6: '',
        bread7: '',
  
        veggies1: '',
        veggies2: '',
        veggies3: '',
        veggies4: '',
        veggies5: '',
        veggies6: '',
        veggies7: '',
        veggies8: '',
        veggies9: '',
  
        sauces1: '',
        sauces2: '',
        sauces3: '',
        sauces4: '',
        sauces5: '',
        sauces6: '',
        sauces7: '',
        sauces8: '',
        sauces9: '',
        sauces10: '',
        sauces11: '',
        sauces12: '',
        sauces13: '',
  
        toasted1: 'Not Toasted',
        toasted2: 'Toasted',
      },
      {
        bread_calories: '',
      },
    ];

    // charNum is the index of the product. We are getting the charNum parameter in urunler.html. This means we can use the selected product informations.
    this.character = this.characters[this.params.get('charNum')];
    // this is just for making things simple. I used extra instead of extras[0] in modal-sandvic.html
    this.extra = this.extras[0]; 
  }
  
  // This is for closing the page.
  dismiss() {
    this.viewCtrl.dismiss();
  }
 
  // This function starts when the page is loaded. It initially get elements from service.php and service3.php as json arrays.
  ionViewDidLoad() {     
        this.http.get(this.url, this.options).map(result => result.json()).subscribe(key => {     
        this.gets = key;
        // To get all sandwich elements seperately, i added a function. This will divide arrays to their elements. I sended that elements to another function. 
        this.elements(this.gets);
        //console.log(global); 
      }, (err) => {
        console.error(err);      
      }  
    ); 
    // To get elements in service3.php
      this.http.get(this.url3, this.options).map(result => result.json()).subscribe(key1 => {     
        this.gets1 = key1;
        // To get all extras elements seperately, i added a function. This will divide arrays to their elements. I sended that elements to another function. 
        this.elements2(this.gets1);
      }, (err) => {
        console.error(err);      
      }  
    );  
  }

  // This function gets sandwich informations from service.php seperately. 
  elements(veri): void {    
    global = veri;  
    // The characters informations were initially empty strings (declared empty in constructor) In this function we are changing their values. We get this information in service.php.
    // The main reason for dividing this arrays as their elements are we don't want to print all characters. We just want to print the selected sandwich name and images for example.
    for(var i=0; i<15;i++) {
      this.characters[i].name = global[i].urun_adi;  
      this.characters[i].image = global[i].gorsel;  
      this.characters[i].calories = global[i].calories;
      this.characters[i].protein = global[i].protein;
      this.characters[i].carb = global[i].carb;
      this.characters[i].fat = global[i].fat;
      this.characters[i].pts = global[i].pts;
    }
  }  

  // This function gets extras informations from service3.php seperately. We are changing the values of extras that we declared as empty strings in constructor.
  elements2(veri): void {    
    global = veri;  
    // NAME OF EVERY EXTRA ITEMS

    // All bread names are set.
    this.extras[0].bread1 = global[0].e_urun_adi;  
    this.extras[0].bread2 = global[1].e_urun_adi;
    this.extras[0].bread3 = global[2].e_urun_adi;
    this.extras[0].bread4 = global[3].e_urun_adi;
    this.extras[0].bread5 = global[4].e_urun_adi;
    this.extras[0].bread6 = global[5].e_urun_adi;
    this.extras[0].bread6 = global[6].e_urun_adi;        

    // All sauces names are set.
    this.extras[0].sauces1 = global[11].e_urun_adi;
    this.extras[0].sauces2 = global[12].e_urun_adi;
    this.extras[0].sauces3 = global[13].e_urun_adi;
    this.extras[0].sauces3 = global[14].e_urun_adi;
    this.extras[0].sauces4 = global[15].e_urun_adi;
    this.extras[0].sauces5 = global[16].e_urun_adi;
    this.extras[0].sauces6 = global[17].e_urun_adi;
    this.extras[0].sauces7 = global[18].e_urun_adi;
    this.extras[0].sauces8 = global[20].e_urun_adi;
    this.extras[0].sauces9 = global[21].e_urun_adi;
    this.extras[0].sauces10 = global[22].e_urun_adi;
    this.extras[0].sauces11 = global[23].e_urun_adi;
    this.extras[0].sauces12 = global[24].e_urun_adi;
    this.extras[0].sauces13 = global[25].e_urun_adi;

    // All veggies names are set.
    this.extras[0].veggies1 = global[26].e_urun_adi;
    this.extras[0].veggies2 = global[27].e_urun_adi;
    this.extras[0].veggies3 = global[28].e_urun_adi;
    this.extras[0].veggies4 = global[29].e_urun_adi;
    this.extras[0].veggies5 = global[30].e_urun_adi;
    this.extras[0].veggies6 = global[31].e_urun_adi;
    this.extras[0].veggies7 = global[32].e_urun_adi;
    this.extras[0].veggies8 = global[33].e_urun_adi;
    this.extras[0].veggies9 = global[34].e_urun_adi;
    
    // ALL Extra Nutrition Values

    // All bread nutrition values are set. 
    for(var i=0; i<7;i++) {
      this.bread_nutrition[i].bread_name = global[i].e_urun_adi;  
      this.bread_nutrition[i].bread_calories = global[i].e_calories;
      this.bread_nutrition[i].bread_carb = global[i].e_carb;      
      this.bread_nutrition[i].bread_fat = global[i].e_fat;  
      this.bread_nutrition[i].bread_protein = global[i].e_protein;
      this.bread_nutrition[i].bread_potasium = global[i].e_pts; 
    }

    // All veggies nutrition values are set.
    for(var i=0; i<9;i++) {
      this.veggies_nutrition[i].veggies_name = global[i+26].e_urun_adi;  
      this.veggies_nutrition[i].veggies_calories = global[i+26].e_calories;
      this.veggies_nutrition[i].veggies_carb = global[i+26].e_carb;      
      this.veggies_nutrition[i].veggies_fat = global[i+26].e_fat;  
      this.veggies_nutrition[i].veggies_protein = global[i+26].e_protein;
      this.veggies_nutrition[i].veggies_potasium = global[i+26].e_pts; 
    }

     // All sauces nutrition values are set.
     for(var i=0; i<13;i++) {
      this.sauces_nutrition[i].sauces_name = global[i+11].e_urun_adi;  
      this.sauces_nutrition[i].sauces_calories = global[i+11].e_calories;
      this.sauces_nutrition[i].sauces_carb = global[i+11].e_carb;      
      this.sauces_nutrition[i].sauces_fat = global[i+11].e_fat;  
      this.sauces_nutrition[i].sauces_protein = global[i+11].e_protein;
      this.sauces_nutrition[i].sauces_potasium = global[i+11].e_pts; 
    }
       
  }  

  // When we select the bread, this function runs. 
  selectBread(calculateBread) {   
    
    /* CONSOLE LOGS FOR TEST
    console.log(this.bread_nutrition[calculateBread].bread_name);
    console.log(this.bread_nutrition[calculateBread].bread_calories);
    console.log(this.bread_nutrition[calculateBread].bread_carb);
    console.log(this.bread_nutrition[calculateBread].bread_fat);
    console.log(this.bread_nutrition[calculateBread].bread_protein);
    console.log(this.bread_nutrition[calculateBread].bread_potasium);  */

    // We are getting the selected bread nutrition values and setting it to another variable.    
    this.b_name = this.bread_nutrition[calculateBread].bread_name;
    this.b_cal = this.bread_nutrition[calculateBread].bread_calories;
    this.b_prot = this.bread_nutrition[calculateBread].bread_protein;
    this.b_carb = this.bread_nutrition[calculateBread].bread_carb;
    this.b_fat = this.bread_nutrition[calculateBread].bread_fat;
    this.b_pts = this.bread_nutrition[calculateBread].bread_potasium;
  }  

  // Calculation of Veggies.
  CalculateVeggies() {   
    // We are checking every checkbox individually. If it is checked, we set the nutritions of that veggie into a variable.

    // If 1. veggie is selected.
    if(this.veggies1_selected == true) {
      this.veggies1_name = this.veggies_nutrition[0].veggies_name;
      this.veggies1_calories = this.veggies_nutrition[0].veggies_calories;
      this.veggies1_protein = this.veggies_nutrition[0].veggies_protein;
      this.veggies1_carb = this.veggies_nutrition[0].veggies_carb;
      this.veggies1_fat = this.veggies_nutrition[0].veggies_fat;
      this.veggies1_pts = this.veggies_nutrition[0].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies1_calories = 0;
      this.veggies1_protein = 0;
      this.veggies1_carb = 0;
      this.veggies1_fat = 0;
      this.veggies1_pts = 0;
    }
    // If 2. veggie is selected.
    if(this.veggies2_selected == true) {
      this.veggies2_name = this.veggies_nutrition[1].veggies_name;
      this.veggies2_calories = this.veggies_nutrition[1].veggies_calories;
      this.veggies2_protein = this.veggies_nutrition[1].veggies_protein;
      this.veggies2_carb = this.veggies_nutrition[1].veggies_carb;
      this.veggies2_fat = this.veggies_nutrition[1].veggies_fat;
      this.veggies2_pts = this.veggies_nutrition[1].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies2_calories = 0;
      this.veggies2_protein = 0;
      this.veggies2_carb = 0;
      this.veggies2_fat = 0;
      this.veggies2_pts = 0;
    }
    // If 3. veggie is selected.
    if(this.veggies3_selected == true) {
      this.veggies3_name = this.veggies_nutrition[2].veggies_name;
      this.veggies3_calories = this.veggies_nutrition[2].veggies_calories;
      this.veggies3_protein = this.veggies_nutrition[2].veggies_protein;
      this.veggies3_carb = this.veggies_nutrition[2].veggies_carb;
      this.veggies3_fat = this.veggies_nutrition[2].veggies_fat;
      this.veggies3_pts = this.veggies_nutrition[2].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies3_calories = 0;
      this.veggies3_protein = 0;
      this.veggies3_carb = 0;
      this.veggies3_fat = 0;
      this.veggies3_pts = 0;
    }
    // If 4. veggie is selected.
    if(this.veggies4_selected == true) {
      this.veggies4_name = this.veggies_nutrition[3].veggies_name;
      this.veggies4_calories = this.veggies_nutrition[3].veggies_calories;
      this.veggies4_protein = this.veggies_nutrition[3].veggies_protein;
      this.veggies4_carb = this.veggies_nutrition[3].veggies_carb;
      this.veggies4_fat = this.veggies_nutrition[3].veggies_fat;
      this.veggies4_pts = this.veggies_nutrition[3].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies4_calories = 0;
      this.veggies4_protein = 0;
      this.veggies4_carb = 0;
      this.veggies4_fat = 0;
      this.veggies4_pts = 0;
    }
    // If 5. veggie is selected.
    if(this.veggies5_selected == true) {
      this.veggies5_name = this.veggies_nutrition[4].veggies_name;
      this.veggies5_calories = this.veggies_nutrition[4].veggies_calories;
      this.veggies5_protein = this.veggies_nutrition[4].veggies_protein;
      this.veggies5_carb = this.veggies_nutrition[4].veggies_carb;
      this.veggies5_fat = this.veggies_nutrition[4].veggies_fat;
      this.veggies5_pts = this.veggies_nutrition[4].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies5_calories = 0;
      this.veggies5_protein = 0;
      this.veggies5_carb = 0;
      this.veggies5_fat = 0;
      this.veggies5_pts = 0;
    }
    // If 6. veggie is selected.
    if(this.veggies6_selected == true) {
      this.veggies6_name = this.veggies_nutrition[5].veggies_name;
      this.veggies6_calories = this.veggies_nutrition[5].veggies_calories;
      this.veggies6_protein = this.veggies_nutrition[5].veggies_protein;
      this.veggies6_carb = this.veggies_nutrition[5].veggies_carb;
      this.veggies6_fat = this.veggies_nutrition[5].veggies_fat;
      this.veggies6_pts = this.veggies_nutrition[5].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies6_calories = 0;
      this.veggies6_protein = 0;
      this.veggies6_carb = 0;
      this.veggies6_fat = 0;
      this.veggies6_pts = 0;
    }
    // If 7. veggie is selected.
    if(this.veggies7_selected == true) {
      this.veggies7_name = this.veggies_nutrition[6].veggies_name;
      this.veggies7_calories = this.veggies_nutrition[6].veggies_calories;
      this.veggies7_protein = this.veggies_nutrition[6].veggies_protein;
      this.veggies7_carb = this.veggies_nutrition[6].veggies_carb;
      this.veggies7_fat = this.veggies_nutrition[6].veggies_fat;
      this.veggies7_pts = this.veggies_nutrition[6].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies7_calories = 0;
      this.veggies7_protein = 0;
      this.veggies7_carb = 0;
      this.veggies7_fat = 0;
      this.veggies7_pts = 0;
    }
    // If 8. veggie is selected.
    if(this.veggies8_selected == true) {
      this.veggies8_name = this.veggies_nutrition[7].veggies_name;
      this.veggies8_calories = this.veggies_nutrition[7].veggies_calories;
      this.veggies8_protein = this.veggies_nutrition[7].veggies_protein;
      this.veggies8_carb = this.veggies_nutrition[7].veggies_carb;
      this.veggies8_fat = this.veggies_nutrition[7].veggies_fat;
      this.veggies8_pts = this.veggies_nutrition[7].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies8_calories = 0;
      this.veggies8_protein = 0;
      this.veggies8_carb = 0;
      this.veggies8_fat = 0;
      this.veggies8_pts = 0;
    }
    // If 9. veggie is selected.
    if(this.veggies9_selected == true) {
      this.veggies9_name = this.veggies_nutrition[8].veggies_name;
      this.veggies9_calories = this.veggies_nutrition[8].veggies_calories;
      this.veggies9_protein = this.veggies_nutrition[8].veggies_protein;
      this.veggies9_carb = this.veggies_nutrition[8].veggies_carb;
      this.veggies9_fat = this.veggies_nutrition[8].veggies_fat;
      this.veggies9_pts = this.veggies_nutrition[8].veggies_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.veggies9_calories = 0;
      this.veggies9_protein = 0;
      this.veggies9_carb = 0;
      this.veggies9_fat = 0;
      this.veggies9_pts = 0;
    }
    
    // TOTAL VEGGIE NUTRITION CALCULATION

    // All the nutrition values of veggies summation. 
    this.veggies_total_calories = +this.veggies1_calories + +this.veggies2_calories + +this.veggies3_calories + +this.veggies4_calories + +this.veggies5_calories + +this.veggies6_calories + +this.veggies7_calories + +this.veggies8_calories + +this.veggies9_calories;
    this.veggies_total_protein = +this.veggies1_protein + +this.veggies2_protein + +this.veggies3_protein + +this.veggies4_protein + +this.veggies5_protein + +this.veggies6_protein + +this.veggies7_protein + +this.veggies8_protein + +this.veggies9_protein;
    this.veggies_total_carb = +this.veggies1_carb + +this.veggies2_carb + +this.veggies3_carb + +this.veggies4_carb + +this.veggies5_carb + +this.veggies6_carb + +this.veggies7_carb + +this.veggies8_carb + +this.veggies9_carb;
    this.veggies_total_fat = +this.veggies1_fat + +this.veggies2_fat + +this.veggies3_fat + +this.veggies4_fat + +this.veggies5_fat + +this.veggies6_fat + +this.veggies7_fat + +this.veggies8_fat + +this.veggies9_fat;
    this.veggies_total_pts = +this.veggies1_pts + +this.veggies2_pts + +this.veggies3_pts + +this.veggies4_pts + +this.veggies5_pts + +this.veggies6_pts + +this.veggies7_pts + +this.veggies8_pts + +this.veggies9_pts;
    console.log("Total Veggies Calories: " + this.veggies_total_calories + "\nTotal Veggies Protein: " + this.veggies_total_protein + "\nTotal Veggies Carb: " + this.veggies_total_carb + "\nTotal Veggies Fat:" + this.veggies_total_fat + "\nTotal Veggies Potasium: " + this.veggies_total_pts);
  }
  // Calculation of Sauces.
  CalculateSauces() {    
    // We are checking every checkbox individually. If it is checked, we set the nutritions of that sauces into a variable. (746 - 897)

    // If 1. sauce is selected.
    if(this.sauces1_selected == true) {
      this.sauces1_name = this.sauces_nutrition[0].sauces_name;
      this.sauces1_calories = this.sauces_nutrition[0].sauces_calories;
      this.sauces1_protein = this.sauces_nutrition[0].sauces_protein;
      this.sauces1_carb = this.sauces_nutrition[0].sauces_carb;
      this.sauces1_fat = this.sauces_nutrition[0].sauces_fat;
      this.sauces1_pts = this.sauces_nutrition[0].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces1_calories = 0;
      this.sauces1_protein = 0;
      this.sauces1_carb = 0;
      this.sauces1_fat = 0;
      this.sauces1_pts = 0;
    }
    // If 2. sauce is selected.
    if(this.sauces2_selected == true) {
      this.sauces2_name = this.sauces_nutrition[1].sauces_name;
      this.sauces2_calories = this.sauces_nutrition[1].sauces_calories;
      this.sauces2_protein = this.sauces_nutrition[1].sauces_protein;
      this.sauces2_carb = this.sauces_nutrition[1].sauces_carb;
      this.sauces2_fat = this.sauces_nutrition[1].sauces_fat;
      this.sauces2_pts = this.sauces_nutrition[1].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces2_calories = 0;
      this.sauces2_protein = 0;
      this.sauces2_carb = 0;
      this.sauces2_fat = 0;
      this.sauces2_pts = 0;
    }
    // If 3. sauce is selected.
    if(this.sauces3_selected == true) {
      this.sauces3_name = this.sauces_nutrition[2].sauces_name;
      this.sauces3_calories = this.sauces_nutrition[2].sauces_calories;
      this.sauces3_protein = this.sauces_nutrition[2].sauces_protein;
      this.sauces3_carb = this.sauces_nutrition[2].sauces_carb;
      this.sauces3_fat = this.sauces_nutrition[2].sauces_fat;
      this.sauces3_pts = this.sauces_nutrition[2].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces3_calories = 0;
      this.sauces3_protein = 0;
      this.sauces3_carb = 0;
      this.sauces3_fat = 0;
      this.sauces3_pts = 0;
    }
    // If 4. sauce is selected.
    if(this.sauces4_selected == true) {
      this.sauces4_name = this.sauces_nutrition[3].sauces_name;
      this.sauces4_calories = this.sauces_nutrition[3].sauces_calories;
      this.sauces4_protein = this.sauces_nutrition[3].sauces_protein;
      this.sauces4_carb = this.sauces_nutrition[3].sauces_carb;
      this.sauces4_fat = this.sauces_nutrition[3].sauces_fat;
      this.sauces4_pts = this.sauces_nutrition[3].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces4_calories = 0;
      this.sauces4_protein = 0;
      this.sauces4_carb = 0;
      this.sauces4_fat = 0;
      this.sauces4_pts = 0;
    }
    // If 5. sauce is selected.
    if(this.sauces5_selected == true) {
      this.sauces5_name = this.sauces_nutrition[4].sauces_name;
      this.sauces5_calories = this.sauces_nutrition[4].sauces_calories;
      this.sauces5_protein = this.sauces_nutrition[4].sauces_protein;
      this.sauces5_carb = this.sauces_nutrition[4].sauces_carb;
      this.sauces5_fat = this.sauces_nutrition[4].sauces_fat;
      this.sauces5_pts = this.sauces_nutrition[4].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces5_calories = 0;
      this.sauces5_protein = 0;
      this.sauces5_carb = 0;
      this.sauces5_fat = 0;
      this.sauces5_pts = 0;
    }
    // If 6. sauce is selected.
    if(this.sauces6_selected == true) {
      this.sauces6_name = this.sauces_nutrition[5].sauces_name;
      this.sauces6_calories = this.sauces_nutrition[5].sauces_calories;
      this.sauces6_protein = this.sauces_nutrition[5].sauces_protein;
      this.sauces6_carb = this.sauces_nutrition[5].sauces_carb;
      this.sauces6_fat = this.sauces_nutrition[5].sauces_fat;
      this.sauces6_pts = this.sauces_nutrition[5].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces6_calories = 0;
      this.sauces6_protein = 0;
      this.sauces6_carb = 0;
      this.sauces6_fat = 0;
      this.sauces6_pts = 0;
    }
    // If 7. sauce is selected.
    if(this.sauces7_selected == true) {
      this.sauces7_name = this.sauces_nutrition[6].sauces_name;
      this.sauces7_calories = this.sauces_nutrition[6].sauces_calories;
      this.sauces7_protein = this.sauces_nutrition[6].sauces_protein;
      this.sauces7_carb = this.sauces_nutrition[6].sauces_carb;
      this.sauces7_fat = this.sauces_nutrition[6].sauces_fat;
      this.sauces7_pts = this.sauces_nutrition[6].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces7_calories = 0;
      this.sauces7_protein = 0;
      this.sauces7_carb = 0;
      this.sauces7_fat = 0;
      this.sauces7_pts = 0;
    }
    // If 8. sauce is selected.
    if(this.sauces8_selected == true) {
      this.sauces8_name = this.sauces_nutrition[7].sauces_name;
      this.sauces8_calories = this.sauces_nutrition[7].sauces_calories;
      this.sauces8_protein = this.sauces_nutrition[7].sauces_protein;
      this.sauces8_carb = this.sauces_nutrition[7].sauces_carb;
      this.sauces8_fat = this.sauces_nutrition[7].sauces_fat;
      this.sauces8_pts = this.sauces_nutrition[7].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces8_calories = 0;
      this.sauces8_protein = 0;
      this.sauces8_carb = 0;
      this.sauces8_fat = 0;
      this.sauces8_pts = 0;
    }
    // If 9. sauce is selected.
    if(this.sauces9_selected == true) {
      this.sauces9_name = this.sauces_nutrition[8].sauces_name;
      this.sauces9_calories = this.sauces_nutrition[8].sauces_calories;
      this.sauces9_protein = this.sauces_nutrition[8].sauces_protein;
      this.sauces9_carb = this.sauces_nutrition[8].sauces_carb;
      this.sauces9_fat = this.sauces_nutrition[8].sauces_fat;
      this.sauces9_pts = this.sauces_nutrition[8].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces9_calories = 0;
      this.sauces9_protein = 0;
      this.sauces9_carb = 0;
      this.sauces9_fat = 0;
      this.sauces9_pts = 0;
    }
    // If 10. sauce is selected.
    if(this.sauces10_selected == true) {
      this.sauces10_name = this.sauces_nutrition[9].sauces_name;
      this.sauces10_calories = this.sauces_nutrition[9].sauces_calories;
      this.sauces10_protein = this.sauces_nutrition[9].sauces_protein;
      this.sauces10_carb = this.sauces_nutrition[9].sauces_carb;
      this.sauces10_fat = this.sauces_nutrition[9].sauces_fat;
      this.sauces10_pts = this.sauces_nutrition[9].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces10_calories = 0;
      this.sauces10_protein = 0;
      this.sauces10_carb = 0;
      this.sauces10_fat = 0;
      this.sauces10_pts = 0;
    }
    // If 11. sauce is selected.
    if(this.sauces11_selected == true) {
      this.sauces11_name = this.sauces_nutrition[10].sauces_name;
      this.sauces11_calories = this.sauces_nutrition[10].sauces_calories;
      this.sauces11_protein = this.sauces_nutrition[10].sauces_protein;
      this.sauces11_carb = this.sauces_nutrition[10].sauces_carb;
      this.sauces11_fat = this.sauces_nutrition[10].sauces_fat;
      this.sauces11_pts = this.sauces_nutrition[10].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces11_calories = 0;
      this.sauces11_protein = 0;
      this.sauces11_carb = 0;
      this.sauces11_fat = 0;
      this.sauces11_pts = 0;
    }
    // If 12. sauce is selected.
    if(this.sauces12_selected == true) {
      this.sauces12_name = this.sauces_nutrition[11].sauces_name;
      this.sauces12_calories = this.sauces_nutrition[11].sauces_calories;
      this.sauces12_protein = this.sauces_nutrition[11].sauces_protein;
      this.sauces12_carb = this.sauces_nutrition[11].sauces_carb;
      this.sauces12_fat = this.sauces_nutrition[11].sauces_fat;
      this.sauces12_pts = this.sauces_nutrition[11].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces12_calories = 0;
      this.sauces12_protein = 0;
      this.sauces12_carb = 0;
      this.sauces12_fat = 0;
      this.sauces12_pts = 0;
    }
    // If 13. sauce is selected.
    if(this.sauces13_selected == true) {
      this.sauces13_name = this.sauces_nutrition[12].sauces_name;
      this.sauces13_calories = this.sauces_nutrition[12].sauces_calories;
      this.sauces13_protein = this.sauces_nutrition[12].sauces_protein;
      this.sauces13_carb = this.sauces_nutrition[12].sauces_carb;
      this.sauces13_fat = this.sauces_nutrition[12].sauces_fat;
      this.sauces13_pts = this.sauces_nutrition[12].sauces_potasium;
    }
    // If it is not checked, the nutritions are 0.
    else {
      this.sauces13_calories = 0;
      this.sauces13_protein = 0;
      this.sauces13_carb = 0;
      this.sauces13_fat = 0;
      this.sauces13_pts = 0;
    }

    // Summation of all sauces.
    console.log(this.sauces1_calories, this.sauces2_calories, this.sauces3_calories, this.sauces4_calories, this.sauces5_calories, this.sauces6_calories, this.sauces7_calories, this.sauces8_calories, this.sauces9_calories, this.sauces10_calories, this.sauces11_calories, this.sauces12_calories, this.sauces13_calories )
    this.sauces_total_calories = +this.sauces1_calories + +this.sauces2_calories + +this.sauces3_calories + +this.sauces4_calories + +this.sauces5_calories + +this.sauces6_calories + +this.sauces7_calories + +this.sauces8_calories + +this.sauces9_calories + +this.sauces10_calories + +this.sauces11_calories + +this.sauces12_calories + +this.sauces13_calories;
    this.sauces_total_protein = +this.sauces1_protein + +this.sauces2_protein + +this.sauces3_protein + +this.sauces4_protein + +this.sauces5_protein + +this.sauces6_protein + +this.sauces7_protein + +this.sauces8_protein + +this.sauces9_protein + +this.sauces10_protein + +this.sauces11_protein + +this.sauces12_protein + +this.sauces13_protein;
    this.sauces_total_carb = +this.sauces1_carb + +this.sauces2_carb + +this.sauces3_carb + +this.sauces4_carb + +this.sauces5_carb + +this.sauces6_carb + +this.sauces7_carb + +this.sauces8_carb + +this.sauces9_carb + +this.sauces10_carb + +this.sauces11_carb + +this.sauces12_carb + +this.sauces13_carb;
    this.sauces_total_fat = +this.sauces1_fat + +this.sauces2_fat + +this.sauces3_fat + +this.sauces4_fat + +this.sauces5_fat + +this.sauces6_fat + +this.sauces7_fat + +this.sauces8_fat + +this.sauces9_fat + +this.sauces10_fat + +this.sauces11_fat + +this.sauces12_fat + +this.sauces13_fat;
    this.sauces_total_pts = +this.sauces1_pts + +this.sauces2_pts + +this.sauces3_pts + +this.sauces4_pts + +this.sauces5_pts + +this.sauces6_pts + +this.sauces7_pts + +this.sauces8_pts + +this.sauces9_pts + +this.sauces10_pts + +this.sauces11_calories + +this.sauces12_calories + +this.sauces13_calories;

    console.log("Total Sauces Calories: " + this.sauces_total_calories);
  }
  
  // CALCULATION FUNCTION STARTS WHEN USER CLICK THE CALCULATE BUTTON
  Calculate() {    
    // For calculating all veggies
    this.CalculateVeggies();
    // For calculating all sauces
    this.CalculateSauces();

    // Calculating the total. 
    // Summation of total calories of selected sandwich, selected bread, selected veggies and selected sauces
    // Summation of total protein of selected sandwich, selected bread, selected veggies and selected sauces
    // Summation of total carb of selected sandwich, selected bread, selected veggies and selected sauces
    // Summation of total fat of selected sandwich, selected bread, selected veggies and selected sauces
    // Summation of total pts of selected sandwich, selected bread, selected veggies and selected sauces


    this.total_calories = +this.character.calories + +this.b_cal + +this.veggies_total_calories + +this.sauces_total_calories;
    this.total_protein = +this.character.protein + +this.b_prot + +this.veggies_total_protein + +this.sauces_total_protein;
    this.total_carb = +this.character.carb + +this.b_carb + +this.veggies_total_carb + +this.sauces_total_carb;
    this.total_fat = +this.character.fat + +this.b_fat + +this.veggies_total_fat + +this.sauces_total_fat;
    this.total_pts = +this.character.pts + +this.b_pts + +this.veggies_total_pts + +this.sauces_total_pts;

    console.log("\n-->Total Calories: " + this.total_calories + "\n-->Total Protein: " + this.total_protein + "\n-->Total Carb: " + this.total_carb + "\n-->Total Fat: " + this.total_fat + "\n-->Total Potasium: " + this.total_pts);
  
    // After every calculation complete, the final result will be printed to screen.
    let alert = this.alertCtrl.create({
      title: 'Total Nutrition Values',
      subTitle: "Total Calories: " + this.total_calories + "<br>Total Protein: " + this.total_protein + "<br>Total Carb: " + this.total_carb + "<br>Total Fat: " + this.total_fat + "<br>Total Potasium: " + this.total_pts,
      buttons: ['Close']
    });
    alert.present();
  } 
}


