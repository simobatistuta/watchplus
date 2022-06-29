import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';
import { slider } from '../animation';
import { SanityService } from '../service/sanity.service';

@Component({
  selector: 'app-glassgo',
  templateUrl: './glassgo.component.html',
  styleUrls: ['./glassgo.component.css'],
  animations: [
    slider
  ]
})

export class GlassgoComponent implements OnInit, OnDestroy {
  @ViewChild('coverLeft') cover: any;
  coverIND = 0;
  coverChange = 0;
  wallpapers: any = [];
  glassChange = 1;
  glassChange_sub;

  constructor(private sanityService: SanityService ) { 
    this.glassChange_sub = this.sanityService.glassSwitchObs.subscribe((data: any)=>{
      this.glassChange = data;
    })
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }  
  
  ngOnInit(): void {
    this.getwallpapers();
    setInterval(() => { this.changeCover(); }, 5000);
  }

  ngOnDestroy(): void {
  }

  async getwallpapers(): Promise<any>  {
    let wallpapers = await this.sanityService.getwallpapers();
    this.wallpapers = wallpapers[0].images;
    return this.wallpapers[0].images;
  }

  changeCover(){
    let width = this.cover.nativeElement.offsetWidth;    
    if(this.coverIND < 3){
      this.coverIND++;
      this.coverChange = -(width * this.coverIND);
    }else if(this.coverIND == 3){
      this.coverIND = 0; 
      this.coverChange = -(width * this.coverIND);
    }
  }

  getRouteAnimationData(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'animation' ];
  }

}
