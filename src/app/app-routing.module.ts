import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplyUserDataComponent } from './disply-user-data/disply-user-data.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // {path:'registration-form',component:RegistrationFormComponent},
  {path:'user-list',component:DisplyUserDataComponent},
  {path:'test-form',component:TestComponent},
  {path:'',redirectTo:'/test-form',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
