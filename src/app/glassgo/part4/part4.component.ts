import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.css']
})
export class Part4Component implements OnInit {

  menu = [
    {
      icon: 'fas fa-home',
      title: 'Accueil'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Nous offres'
    },
    {
      icon: 'fas fa-headset',
      title: 'Contacter nous'
    },
    {
      icon: 'fas fa-compass',
      title: 'À propos de nous'
    }
  ]

  redir = [
    {
      icon: 'fab fa-facebook-f',
      title: 'WatchPlus+',
      link: 'https://www.facebook.com/WatchPlusiPtV'
    },
    {
      icon: 'fas fa-headset',
      title: 'watchplus@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Watchplusiptv@gmail.com&su=watchplus-iptv&body=hi'

    },
    {
      icon: 'fab fa-whatsapp',
      title: '+212633719905',
      link: 'https://wa.me/212633719905'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
