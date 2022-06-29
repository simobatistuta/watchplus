import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SanityService } from 'src/app/service/sanity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang=1;
  glass:number=1;
  pagePath;

  constructor(private sanityService: SanityService, 
              public router: Router,
              public ac_route: ActivatedRoute) 
    { 
      this.pagePath = this.ac_route?.snapshot?.firstChild?.routeConfig?.path;
      this.router.events.forEach((event) => {
        if(event instanceof NavigationEnd) {
          this.pagePath = this.ac_route?.snapshot?.firstChild?.routeConfig?.path;
        }
      })
    }

  ngOnInit() {
  }

  changeLng(ref:any){
    this.lang = ref;
    this.sanityService.changeLang.next(this.lang);
  }

  changeGlass(){
    this.glass == 1 ? this.glass = 2 : this.glass = 1;
    this.sanityService.glassSwitch.next(this.glass);
  }

  getLevel(){
    if(this.pagePath == ''){
      return '01';
    }else if(this.pagePath == 'offre'){
      return '02';
    }else if(this.pagePath == 'contact'){
      return '03';
    }else if(this.pagePath == 'about'){
      return '04';
    }else{
      return '00';
    }
  }

}

