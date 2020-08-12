import { LoggingService } from "./loggging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountService{
  
  constructor(private loggingService:LoggingService){}
  
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<String>();

      addAccount(name:string,status:string){
        this.accounts.push({
            name:name,
            status:status
        });
      }

      updateStatus(id:number,status:string){
        this.accounts[id].status = status;
      }
}