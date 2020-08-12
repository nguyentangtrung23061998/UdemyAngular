export class CounterService {
    activeToInActiveCounter = 0;
    inActiveCounterToActive = 0;

    counterActivetoInactive() {
        this.activeToInActiveCounter++;
        console.log(" counterActivetoInactive "+this.activeToInActiveCounter);
    }
    
    counterInActiveCounterToActive() {
        this.inActiveCounterToActive++;
        console.log("counterInActiveCounterToActive "+this.inActiveCounterToActive);
    }
}