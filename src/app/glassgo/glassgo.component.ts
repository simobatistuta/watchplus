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
  coverIND = 0;
  coverChange = 0;
  @ViewChild('coverLeft') cover: any;
  wallpapers: any = [];
  sub: any = 1;

  constructor(private sanityService: SanityService ) { }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }  
  
  ngOnInit(): void {
    this.getwallpapers();
    setInterval(() => { this.changeCover(); }, 5000);
    this.sub = this.sanityService.scrollObs.subscribe((data:any)=>{
      console.log(data)
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
