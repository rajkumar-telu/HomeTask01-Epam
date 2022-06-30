import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActiveComponent } from './modules/active/active.component';
import { DeleteComponent } from './modules/deleted/delete.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},
{
  path:'active',
  component:ActiveComponent
},
{
  path:'deleted',
  component:DeleteComponent
},
{
  path:'manage',
  loadChildren:() => import('./modules/manage/manage.module')
  .then(mod => mod.ManageModule)
},
{
  path:"",
  redirectTo:"home",
  pathMatch:"full"
},
{
  path:"**",
  redirectTo:"home"
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
