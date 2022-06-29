import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})
export class Part3Component implements OnInit {
  lang = 1; 

  myform:any = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });
  
  numbers = [
    {
      count: 25000, 
      msg_en: 'CHAÎNES EN DIRECT',
      msg_fr: 'LIVE CHANNELS',
      msg_ar: 'القنوات الحية'

    },
    {
      count: 150000, 
      msg_en: 'Movies and TV series',
      msg_fr: 'FILMS ET SÉRIES TÉLÉVISÉES',
      msg_ar: 'الأفلام والمسلسلات التلفزيونية'

    },
    {
      count: 117,
      msg_en: 'SATISFIED CUSTOMERS',
      msg_fr: 'CLIENTS SATISFAITS',
      msg_ar: 'زبائن يشعرون بالرضى'
    },
    {
      count: 60,
      msg_en: 'IN STOCK',
      msg_fr: 'EN STOCK',
      msg_ar: 'في المخزن'
    },
  ]
  constructor() { }

  ngOnInit() {

  }

  changeLng(ref:any){
    this.lang = ref;
  }

  ofr_tit(){
    if(this.lang==1)
      return 'test for 24 hours to make sure';
    else if(this.lang == 2)
      return "tester pendant 24 heures pour s'assurer";
    else if(this.lang == 3)
      return 'اختبار لمدة 24 ساعة للتأكد';
    else
    return   '';      
  }

  ofr_sub(){
    if(this.lang==1)
      return 'Before buying our IPTV service, we send you a test for 24 hours, to find out the quality of our service.';
    else if(this.lang == 2)
      return "Avant d'acheter notre service IPTV, nous vous envoyons un test pendant 24h, pour découvrir la qualité de notre service.";
    else if(this.lang == 3)
      return 'قبل شراء خدمة IPTV الخاصة بنا ، نرسل لك اختبارًا لمدة 24 ساعة ، لمعرفة جودة خدمتنا';
    else
    return   '';      
  }

  numMsg(ind:any){
    if(this.lang==1)
      return this.numbers[ind].msg_en;
    else if(this.lang == 2)
      return this.numbers[ind].msg_fr;
    else if(this.lang == 3)
      return this.numbers[ind].msg_ar;
    else
    return   '';      
  }
  //9DB78D576E386721A77546FC323872FE23CD
  //Watchplusiptv@gmail.com
  //smtp.elasticemail.com
  //2525
  //smtp.elasticemail.com:2525/


  onSubmit() {
    console.log(this.myform.value)
    if (!this.myform.valid) {
      alert('Please fill all & valid employee details');
      return;
    }

    console.log(this.myform.value.name)
    console.log(this.myform.value.message)

    Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'Watchplusiptv@gmail.com',
    Password : '9DB78D576E386721A77546FC323872FE23CD',
    To : 'watchplusiptv@gmail.com',
    From : this.myform.value.email,
    Subject : "IPTV subscription",
    Body : `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.myform.value.name} <br /> <b>Email: </b>${this.myform.value.email}<br /> <b>Subject: </b>IPTV subscription<br /> <b>Message:</b> <br /> ${this.myform.value.message} <br><br> <b>~End of Message.~</b> `
    }).then( (message: any) => {alert(message); this.myform.reset(); } );
      
      
  }

  isValidControl(controlName: string) {
    let control = this.myform.get(controlName);
    return control && control.invalid && control.touched;
  }

}
