import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';




@NgModule({

  declarations: [

    AppComponent,

    ContactUsComponent,

    LandingPageComponent,

    PlaceFitnessTrainerAppointmentComponent,


  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    
  ],

  exports: [

    PlaceFitnessTrainerAppointmentComponent,

    ContactUsComponent,

    LandingPageComponent

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

