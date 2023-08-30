import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SitesComponent } from './sites/sites.component';

const routes: Routes = [
  {path:"serversdetails", component: SitesComponent},
  {path:"", component:ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
