import { Component, OnInit } from '@angular/core';
import {Exercise} from '../ex.module';
import { TrainingService } from '../training.service';
import {Subscription} from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit{

  allExercises!: FormGroup;
  trainings: Exercise[] = [];
  ongoingTraining = false;
  

  selectedTraining!: Exercise;
  exSubscription!: Subscription;


  constructor(private trainingService: TrainingService, private formBuilder: FormBuilder, private router: Router){
    
  }

  ngOnInit() {
      this.trainings = this.trainingService.getAvailableEx();
      this.exSubscription = this.trainingService.exerciseChanged.subscribe(
        ex => {
          if(ex){
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
        }
      );
      this.allExercises = this.formBuilder.group({
        exercise: new FormControl()
      });
  }



  onSubmit(){
    this.ongoingTraining = true;
    const x =  this.allExercises!.get('exercise')!.value;
    const y = x.id;
    if(y){
    this.trainingService.startEx(y);
    console.log(x.id);
    }else{
    console.log(y);
    }
    this.router.navigate(['./app-current-training']);
  }



}
