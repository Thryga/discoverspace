import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

let now = moment().format('LLLL');

@Component({
  selector: 'app-picfrommars',
  templateUrl: './picfrommars.component.html',
  styleUrls: ['./picfrommars.component.css','../app.component.css']
})
export class PicfrommarsComponent implements OnInit {

    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=MNJDLuTsUgfgeceb5KqHIEzLjHl17XP4Qkiu6MFH';//&earth_date=2017-08-08
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-08-08&api_key=MNJDLuTsUgfgeceb5KqHIEzLjHl17XP4Qkiu6MFH
//https://images-api.nasa.gov/search?q=mars&media_type=image galerie mars

    photo = null;

    //Calendrier
    date;
    formatdate;
    dateindic;
    loading: boolean = false;
    minDate = new Date(1995, 5, 16);
    maxDate = new Date();


  constructor(private http: HttpClient) { }
    //Appel de l'API
    getCall(lien){
        this.loading = true;
        this.http.get(lien).subscribe(
        data=>{
            this.photo = data;
            console.log(this.photo);
        })
    }

  ngOnInit() {
      //Appel de l'api Photo du jour
        this.http.get(this.url).subscribe(
        data=>{
            this.photo = data;
        })
  }
    
    //Event Change calendrier
    onDateChange(){

        //Changement de format de la date récupérée
        this.formatdate = moment(this.date).format("YYYY-MM-DD");
        
        //Appel http pour charger l'image
        this.getCall(this.url+'&earth_date='+this.formatdate);
    }

    //Chargement d'image
    onLoad() {
        this.loading = false;
    }
}
