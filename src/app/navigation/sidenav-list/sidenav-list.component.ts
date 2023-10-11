import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  sidebarVisible: boolean = false;
  isAuth!: boolean;
  authSubscription!: Subscription;


constructor(private authService: AuthService ){

}

ngOnInit(){
  this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    this.isAuth = authStatus;
  })
}

ngOnDestroy(){
  this.authSubscription.unsubscribe();
}

onLogout(){
  this.authService.logout();
  this.sidebarVisible = false;
}

}
