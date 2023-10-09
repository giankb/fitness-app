import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent {
  value: number = 0;
  timer: number | undefined;

    constructor() {
      
    }
  

    ngOnInit() {
      this.timer = setInterval(() => {
        this.value = this.value + 2;
        if (this.value == 100) {
            this.value = 100;
            clearInterval(this.timer);
        }
    }, 1000);
    }



    stopTraining(){
      clearInterval(this.timer);
    }


}
