import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { ReactiveFormsModule} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CalendarModule,
    CheckboxModule,
    MatCheckboxModule,
    InputTextModule,
    StyleClassModule,
    ReactiveFormsModule,
    RecaptchaModule,
    SidebarModule,
    MenubarModule,
    MenuModule
  ],
  exports: [
    CheckboxModule,
    MatCheckboxModule,
    InputTextModule,
    StyleClassModule,
    ButtonModule,
    ReactiveFormsModule,
    RecaptchaModule,
    SidebarModule,
    MenubarModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
