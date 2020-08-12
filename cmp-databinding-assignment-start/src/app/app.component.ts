import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOdd : number[] = [];
  numberEven:number[]=[];
  onIntervalFire(fireNumber:number){
    if(fireNumber % 2 === 0 ){
      this.numberOdd.push(fireNumber);
    }else{
      this.numberEven.push(fireNumber);
    }
  }
}
