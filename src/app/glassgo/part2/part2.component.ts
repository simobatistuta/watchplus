import { Component, OnDestroy, OnInit } from '@angular/core';
import { SanityService } from 'src/app/service/sanity.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit, OnDestroy {
  lang:any = 1;
  langChange:any;

  netFlix_en = 'Contact us on whatsapp for netflix accounts';
  netFlix_fr = 'Contactez-nous sur WhatsApp pour les comptes netflix';
  netFlix_ar = 'تواصل معنا على الواتساب لحسابات نيتفليكس';

  prices = [
    {
      time_en: '1 MONTH',
      time_fr: '1 MOIS',
      time_ar: '1 شهر',
      price: 10
    },
    {
      time_en: '3 MONTHS',
      time_fr: '3 MOIS',
      time_ar: '3 شهور',
      price: 20
    },
    {
      time_en: '6 MONTHS',
      time_fr: '6 MOIS',
      time_ar: '6 شهور',
      price: 30
    },
    {
      time_en: '12 MONTHS',
      time_fr: '12 MOIS',
      time_ar: '12 شهور',
      price: 42
    }
  ];

  cards:any = [
    {
      icon: 'fas fa-tv',
      title_en: 'Live Channels',
      title_fr: 'Chaînes en direct',
      title_ar: 'القنوات الحية',
      msg_en: 'Over 20,000 live TV channels',
      msg_fr: 'Plus de 20 000 chaînes de télévision en direct',
      msg_ar: 'أكثر من 20000 قناة تلفزيونية مباشرة'
    },
    {
      icon: 'fas fa-expand',
      title_en: 'Different qualities',
      title_fr: 'Différentes qualités',
      title_ar: 'صفات مختلفة',
      msg_en: 'Different qualities: SD/HD/FULL HD/4K',
      msg_fr: 'Différentes qualités: SD/HD/FULL HD/4K',
      msg_ar: 'صفات مختلفة: SD / HD / FULL HD / 4K',
    },
    {
      icon: 'fas fa-film',
      title_en: 'Movies and TV series',
      title_fr: 'Films et séries télévisées',
      title_ar: 'الأفلام والمسلسلات التلفزيونية',
      msg_en: 'More than 150,000 Movies & TV Series',
      msg_fr: 'Plus de 150 000 Films & Séries TV',
      msg_ar: 'أكثر من 150.000 فيلم ومسلسل تلفزيوني'

    },
    {
      icon: 'fas fa-headphones',
      title_en: 'Support',
      title_fr: 'Soutien',
      title_ar: 'الدعم',
      msg_en: 'Support technique 24h/7',
      msg_fr: 'Assistance technique 24h/7',
      msg_ar: 'تقنية الدعم 24 ساعة / 7 أيام'
    }
  ];

  constructor(private sanityService: SanityService){  }

  ngOnInit() {
    this.langChange = this.sanityService.changeLangObs.subscribe((data)=>{
      this.lang = data;
    })
  }

  ngOnDestroy(): void {
    this.langChange.unsubscribe(); 
  }

  en = {
    title: 'The best IPTV subscription to buy',
    sub: 'WHY CHOOSE US?',
    button: 'We have chosen very good servers for an optimal quality of IPTV service'
  }

  fr = { 
    title: 'Le meilleur abonnement IPTV à acheter',
    sub: 'POURQUOI NOUS CHOISIR?',
    button: 'Nous avons choisi de très bons serveurs pour une qualité de service IPTV optimale'

  }

  ar = { 
    title: 'IPTV أفضل اشتراك للشراء ', 
    sub: 'لماذا أخترتنا؟',
    button: 'IPTV لقد اخترنا خوادم جيدة جدًا للحصول على جودة مثالية لخدمة'
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

  getCartTitle(ind:any){
    if(this.lang==1)
      return this.cards[ind].title_en;
    else if(this.lang == 2)
      return this.cards[ind].title_fr;
    else if(this.lang == 3)
      return this.cards[ind].title_ar;
    else
      return '';    
  }

  getCartMsg(ind:any){
    if(this.lang==1)
      return this.cards[ind].msg_en;
    else if(this.lang == 2)
      return this.cards[ind].msg_fr;
    else if(this.lang == 3)
      return this.cards[ind].msg_ar;
    else
      return '';    
  }

  getPriceMsg(ind:any){
    if(this.lang==1)
      return this.prices[ind].time_en;
    else if(this.lang == 2)
      return this.prices[ind].time_fr;
    else if(this.lang == 3)
      return this.prices[ind].time_ar;
    else
      return '';    
  }

  getNetMsg(){
    if(this.lang==1)
      return this.netFlix_en;
    else if(this.lang == 2)
      return this.netFlix_fr;
    else if(this.lang == 3)
      return this.netFlix_ar;
    else
      return '';    
  }

}

