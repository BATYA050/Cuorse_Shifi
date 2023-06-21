import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Schedule } from './Schedule_s/Schedule';
// import { AuthGuard } from 'src/app/auth.guard';


const routes: Routes = [
  {
    path: 'Schedule',
    component: Schedule,
  
  }
  // , {
  //   path:'admin',
  //   component:AdminHomeComponent,
  //   canActivate : [AuthGuard]

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


