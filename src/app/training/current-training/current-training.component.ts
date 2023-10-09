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
  isPaused: boolean = false;
  buttonText: string = "Pause";

    constructor() {
      
    }
  

    ngOnInit() {
      this.startTimer();
    }
  
    startTimer() {
      this.timer = setInterval(() => {
        if (!this.isPaused) { // Verifica se la pausa è attiva o meno
          this.value = this.value + 2;
          if (this.value >= 100) { // Cambiato da '==' a '>=' per evitare potenziali problemi di loop infiniti
            this.value = 0; // Resettiamo il valore a 0
          }
        }
      }, 1000);
    }
  
    stopTraining() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = undefined;
      }
    }
  
    resetTraining() {
      this.stopTraining(); // Interrompe l'intervallo attuale
      this.value = 0; // Reimposta il valore a 0
      this.startTimer(); // Avvia un nuovo intervallo
      if(this.isPaused){
        this.isPaused = !this.isPaused;
        this.buttonText= "Pause";
      }
    }

    togglePaused(){
      if(this.isPaused){
      this.isPaused = !this.isPaused;
      this.buttonText= "Pause";
    } else {
      this.isPaused = !this.isPaused;
      this.buttonText= "Continue";
    }
    }

}
