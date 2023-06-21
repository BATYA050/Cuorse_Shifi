import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Schedule } from './Schedule_s/Schedule';



const routes: Routes = [
  {
    path: 'Schedule',
    component: Schedule,
  
  }

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


