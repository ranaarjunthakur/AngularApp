import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ChildComponent } from './first-page/child/child.component';

const routes: Routes = [
  {
    path: 'firstPage',
    component:FirstPageComponent
  },
  {
    path: 'child/:id/:name/:description',
    component:ChildComponent
  },
  {
    path: 'secondPage/:id/:edit',
    component:SecondPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
