import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SanityService } from '../service/sanity.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  pagePath:any;
  sub = 1;
  constructor(public sanityService: SanityService,
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

  scroll(ref:any) {
    this.sub = ref;
    this.sanityService.scroll.next(ref)
  }

}
