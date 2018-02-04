import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {
 videos: any;
 yo:String = "https://www.youtube.com/embed/";
data;
loaded:boolean;



 
  constructor(public http:Http,public navCtrl: NavController) {
    this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&type=videos&channelId=UCtz3sMM1qPIm1WrbhaJexaA&maxResults=5&key=AIzaSyDyIXJHb0clHIW60pG8OR_G8XRuaUtVqHk').map(res => res.json()).subscribe(data => {
      this.videos = data.items;
       this.data = data;
this.loaded = false;
console.log(this.videos);
        
  });



  }


  onLoad(data): void {
    console.log("ariiis");
this.loaded = true;
    
    
  }

  doInfinite(infiniteScroll) {
    
      setTimeout(() => {
      this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&pageToken='+ this.data.nextPageToken +'&part=snippet&type=videos&channelId=UCtz3sMM1qPIm1WrbhaJexaA&maxResults=2&key=AIzaSyDyIXJHb0clHIW60pG8OR_G8XRuaUtVqHk').map(res => res.json()).subscribe(data2 => {
       console.log(data2.items);
       this.data = data2;
       for(var i=0;i<data2.items.length;i++) {
         console.log(this.videos.push(data2.items[i]));
       }
  
  }); 

    

      infiniteScroll.complete();
    }, 500); 
  }

}
