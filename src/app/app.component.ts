import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitness-app';
  

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
          {label: 'Home', routerLink:['']},
          {label: 'Trainings', routerLink: ['/app-training']},
          {label: 'Logout', routerLink: ['']}
          ];
  }
  constructor(){

  }
}
