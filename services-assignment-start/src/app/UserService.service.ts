import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService.service";

@Injectable()
export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterSV:CounterService){}

    setToInactive(id: number) {
        this.activeUsers.push(this.activeUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterSV.counterInActiveCounterToActive();
    }
    setToActive(id: number) {
        this.inactiveUsers.push(this.inactiveUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterSV.counterActivetoInactive();
        
    }
}