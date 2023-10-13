import { Exercise } from "./ex.module";
import { Subject } from 'rxjs';

export class TrainingService {

    exerciseChanged = new Subject<Exercise>();
    public exercises: Exercise[] = [];



    private availableEx: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8, state: null},
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 14, state: null},
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18, state: null},
        { id: 'burpees', name: 'Burpees', duration: 30, calories: 8, state: null},
        { id: 'pull-ups', name: 'Pull-Ups', duration: 20, calories: 16, state: null}
    ];

    private NO_EXERCISE: Exercise = { id: '', name: '', duration: 0, calories: 0 };
    public runningEx!: Exercise;


    getAvailableEx(){
        return this.availableEx.slice();
    }


    startEx(selectedId: string){
        const foundExercise = this.availableEx.find(ex => ex.id === selectedId);

            if (foundExercise) {
                this.runningEx = foundExercise;
                this.exerciseChanged.next({ ...this.runningEx });
            } else {
                console.error(`${selectedId} not found`);
            }
    }


    getRunningex(){
        return {...this.runningEx };
    }

    completedEx() {
        if (this.runningEx) {
            this.exercises.push({ ...this.runningEx, date: new Date(), state: "completed" });
            this.runningEx = this.NO_EXERCISE; 
            this.exerciseChanged.next(this.NO_EXERCISE)
        }
    }
    

    stoppedEx(progress: number){
        if (this.runningEx) {
            this.exercises.push({ ...this.runningEx, 
                date: new Date(),
                duration: Math.round(this.runningEx.duration * (progress/100)) ,
                calories: Math.round(this.runningEx.calories/ this.runningEx.duration), 
                state: "cancelled" });
            this.runningEx = this.NO_EXERCISE; 
            this.exerciseChanged.next(this.NO_EXERCISE)
        }
    }
}