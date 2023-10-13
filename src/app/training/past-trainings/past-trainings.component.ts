import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../ex.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {

exercise: Exercise[] = [];
items = new Array();

  constructor(private trainingService: TrainingService, private router: Router){
  }
  


  ngOnInit() {
    this.exercise = [];
    console.log(this.exercise);
    this.exercise = this.trainingService.exercises;
    console.log(this.exercise);;
  }
  

  deleteRecords(){
    this.exercise = [];
  }
}
