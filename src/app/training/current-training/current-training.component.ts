import { Component} from '@angular/core';
import {Subscription} from 'rxjs';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';


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
  progress: number = 0;
  seconds: number = 0;
  secondsLeft : string = '';
  name!: string ;
  
  

    constructor(private trainingService: TrainingService, private router: Router) {
      
    }
  

    ngOnInit() {
      this.startTimer();
      this.name = this.trainingService.getRunningex().name;
    }
  
    startTimer() {
      const step = this.trainingService.getRunningex().duration*10;
      this.timer = setInterval(() => {
        if (!this.isPaused) {
          this.value = this.value + 1;
          this.progress = this.value;
          const x = step;
          this.seconds = (x/10) - (step/100)*(this.value/10);
          this.secondsLeft = this.seconds.toFixed(1)
          if (this.value >= 100) {
            this.trainingService.runningEx.state = "completed";
            this.trainingService.completedEx();
            clearInterval(this.timer);
            setTimeout(() => {
              this.router.navigate(['./app-training']);
            }, 3000);
            console.log(this.trainingService.exercises);
          }
        }
      }, step);
    }
  
    stopTraining() {
      if(!this.isPaused){
        this.isPaused = !this.isPaused;
      }
      this.popupStyle = {display: 'block'};
      this.overlay = {display: 'block'};
      this.icona= "pi pi-play";
      console.log(this.trainingService.exercises)

      //if (this.timer) {
        //clearInterval(this.timer);
        //this.timer = undefined;
      //}
    }


    blockTraining(){
      this.trainingService.runningEx.state = "cancelled";
      this.trainingService.stoppedEx(this.progress);
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
