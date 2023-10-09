import { Component, OnInit } from '@angular/core';

interface Trainings {
  name: string;
  code: string;
}

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit{

  trainings: Trainings[] | undefined;

  selectedTraining: Trainings | undefined;

  ngOnInit() {
      this.trainings = [
          { name: 'Shoulders', code: 'S' },
          { name: 'Legs', code: 'L' },
          { name: 'Breast', code: 'B' },
          { name: 'Arms', code: 'A' }
      ];
  }

}
