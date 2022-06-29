import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  lang = 1;

  constructor(){
  }

  ngOnInit() {
  }

  en = {
    title: 'A limitless entertainment experience',
    sub: 'access thousands of channels from around the world, thousands of movies and hundreds of series With WatchPlusIPTV',
    button: 'Get it now'
  }

  fr = { 
    title: 'Une expérience de divertissement sans limite',
    sub: 'accéder à des milliers de chaines du monde entier, des miliers de films et des centaines de series avec WatchPlusIPTV',
    button: 'Obtenez le maintenant'

  }

  ar = { 
    title: 'تجربة ترفيهية لا حدود لها', 
    sub: ' قم بالوصول إلى آلاف القنوات من جميع أنحاء العالم، وآلاف الأفلام ومئات WatchPlusIPTV  المسلسلات باستخدام',
    button: 'احصل عليها الآن'

  }

  getTitle(){
    if(this.lang==1)
      return this.en.title;
    else if(this.lang == 2)
      return this.fr.title;
    else if(this.lang == 3)
      return this.ar.title;
    else
      return '';    
  }

  getSubTitle(){
    if(this.lang==1)
      return this.en.sub;
    else if(this.lang == 2)
      return this.fr.sub;
    else if(this.lang == 3)
      return this.ar.sub;
    else
      return '';    
  }

  getBut(){
    if(this.lang==1)
      return this.en.button;
    else if(this.lang == 2)
      return this.fr.button;
    else if(this.lang == 3)
      return this.ar.button;
    else
      return '';    
  }

  changeLng(ref:any){
    this.lang = ref;
  }

}
