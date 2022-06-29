import { style, transition, trigger, query, animate, animateChild, group } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'watchplus';
  
  constructor(private contexts: ChildrenOutletContexts) {}

 
}
