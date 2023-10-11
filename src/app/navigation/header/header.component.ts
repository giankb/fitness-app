import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  items: MenuItem[] = [];
  isAuth!: boolean;

  authSubscription!: Subscription;

  constructor(private authService: AuthService){

  }
  

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      this.updateMenuItems();
    });

    this.updateMenuItems();
   
  }



ngOnDestroy(){
  this.authSubscription.unsubscribe();
}

updateMenuItems(){
  this.items = [
    { label: 'Home', routerLink: [''] },
    { label: 'Trainings', routerLink: ['/app-training'] },
    { label: 'Login', routerLink: ['/login'] },
    { label: 'Signup', routerLink: ['/signup'] }
  ];
    
    if (this.isAuth) {
      this.items.push({ label: 'Logout', command: () => this.onLogout()  });
      const index = this.items.findIndex(item => item.label === 'Login');
      if (index !== -1) {
        this.items.splice(index, 1);}
        const index2 = this.items.findIndex(item => item.label === 'Signup');
      if (index2 !== -1) {
        this.items.splice(index2, 1);} 



    } else {
      const index = this.items.findIndex(item => item.label === 'Login');
      const index2 = this.items.findIndex(item => item.label === 'Signup');
      if(index<0 && index2<0){

        this.items.push({ label: 'Login', routerLink: ['/login'] });
        this.items.push({ label: 'Signup', routerLink: ['/signup'] });
      }
      const index3 = this.items.findIndex(item => item.label === 'Trainings');
      if (index3 !== -1) {
        this.items.splice(index3, 1);} 
    }
}

onLogout(){
  this.authService.logout();
}

}
