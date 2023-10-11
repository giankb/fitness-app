import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  //yourSiteKey = 'Null'; 

  ngOnInit() {

  }

 


  constructor(private authservice: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

 // handleCaptchaResolved(token: string): void {
 //   console.log('Captcha risolto, token:', token);
 // }

 onSubmit() {
  this.authservice.login({
   email: this.loginForm.value.email,
   password: this.loginForm.value.password
  });
 }
  
}
