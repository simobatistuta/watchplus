import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SanityService {

  changeLang = new Subject();
  changeLangObs = this.changeLang.asObservable();

  glassSwitch = new Subject();
  glassSwitchObs = this.glassSwitch.asObservable();

  client = sanityClient({
    projectId: "3slzzlgf",
    dataset: "production"

  })

  constructor() {

  }

  builder = imageUrlBuilder(this.client);
  urlFor = (source: any) => this.builder.image(source);  

  async getwallpapers(): Promise<any> {
    return await this.client.fetch(
      `*[_type == "watchplus"]{
        "images": wallpapers[].asset._ref
      }`
    );
  }

  
  
}
