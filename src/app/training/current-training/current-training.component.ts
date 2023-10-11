import { Component} from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent {
  value: number = 0;
  timer: number | undefined;
  isPaused: boolean = false;
  buttonText: string = "Pause";
  popupStyle = {display: 'none'};
  overlay = {display: 'none'};
  icona: string= "pi pi-pause";

    constructor() {
      
    }
  

    ngOnInit() {
      this.startTimer();
    }
  
    startTimer() {
      this.timer = setInterval(() => {
        if (!this.isPaused) {
          this.value = this.value + 2;
          if (this.value >= 100) {
            clearInterval(this.timer);
          }
        }
      }, 1000);
    }
  
    stopTraining() {
      if(!this.isPaused){
        this.isPaused = !this.isPaused;
      }
      
      this.popupStyle = {display: 'block'};
      this.overlay = {display: 'block'};
      this.icona= "pi pi-play";

      //if (this.timer) {
        //clearInterval(this.timer);
        //this.timer = undefined;
      //}
    }
  
    resetTraining() {
    //  this.stopTraining();
      clearInterval(this.timer);
      this.value = 0; 
      this.startTimer();
      if(this.isPaused){
        this.isPaused = !this.isPaused;
        this.icona= "pi pi-pause";
      }
    //  this.popupStyle = {display: 'none'};
    }

    togglePaused(){
      if(this.isPaused){
      this.isPaused = !this.isPaused;
      this.icona= "pi pi-pause";
      this.popupStyle = {display: 'none'};
      this.overlay = {display: 'none'};
    } else {
      this.isPaused = !this.isPaused;
      this.icona= "pi pi-play";
    }
    }

}
