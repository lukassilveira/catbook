import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MessageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
