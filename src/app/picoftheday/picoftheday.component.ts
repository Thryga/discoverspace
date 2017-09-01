import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

let now = moment().format('LLLL');

@Component({
  selector: 'app-picoftheday',
  templateUrl: './picoftheday.component.html',
  styleUrls: ['./picoftheday.component.css','../app.component.css']
})

export class PicofthedayComponent implements OnInit {

    url = 'https://api.nasa.gov/planetary/apod?api_key=MNJDLuTsUgfgeceb5KqHIEzLjHl17XP4Qkiu6MFH';//galerie https://images-api.nasa.gov/search?media_type=image

    photo = null;

    //Calendrier
    date;
    formatdate;
    dateindic;
    loading: boolean = false;
    minDate = new Date(1995, 5, 16);
    maxDate = new Date();
    frdate;
    title = 'Photo du jour';

  constructor(private http: HttpClient) { }

    //Appel de l'API
    getCall(lien){
        this.loading = true;
        this.http.get(lien).subscribe(
        data=>{
            this.photo = data;
        })
    }

  ngOnInit() {
      //Appel de l'api Photo du jour
        this.http.get(this.url).subscribe(
        data=>{
            this.photo = data;
            this.frdate = moment(this.maxDate).format("DD-MM-YYYY");
        })
  }

    //Event Change calendrier
    onDateChange(){

        //Changement de format de la date récupérée
        this.dateindic = moment(this.date);
        this.formatdate = this.dateindic.format("YYYY-MM-DD");
        this.frdate = this.dateindic.format("DD-MM-YYYY");
        this.title = 'Photo du '+this.frdate;
        //Appel http pour charger l'image
        this.getCall(this.url+'&date='+this.formatdate);
    }

    //Chargement d'image
    onLoad() {
        this.loading = false;
    }

    dateminus(){
        this.date = moment(this.date).subtract(1, 'day');
        this.formatdate = this.date.format("YYYY-MM-DD");
        this.frdate = this.date.format("DD-MM-YYYY");
        console.log(this.formatdate);
        this.title = 'Photo du '+this.frdate;
        this.getCall(this.url+'&date='+this.formatdate);
    }

    /*dateplus(){
        this.date = moment(this.date).add(1, 'day');
        this.formatdate = this.date.format("YYYY-MM-DD");
        console.log(this.date);
        this.frdate = this.date.format("DD-MM-YYYY");
        console.log(this.formatdate);
        this.title = 'Photo du '+this.frdate;
        this.getCall(this.url+'&date='+this.formatdate);
    }*/
}
