import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  yourSiteKey = 'Null'; 

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully.');
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }


  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  handleCaptchaResolved(token: string): void {
    console.log('Captcha risolto, token:', token);
  }
  
}
