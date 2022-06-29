import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassgoComponent } from './glassgo/glassgo.component';
import { Part1Component } from './glassgo/part1/part1.component';
import { Part2Component } from './glassgo/part2/part2.component';
import { Part3Component } from './glassgo/part3/part3.component';
import { Part4Component } from './glassgo/part4/part4.component';

const routes: Routes = [
  {path: '' , component: GlassgoComponent,
    children:[
      {path: '',      component: Part1Component,    data: { animation: 'page_1' } },
      {path: 'offre', component: Part2Component,    data: { animation: 'page_2' } },
      {path: 'contact' , component: Part3Component, data: { animation: 'page_3' } },
      {path: 'about', component: Part4Component,    data: { animation: 'page_4' } },
    ]

  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
