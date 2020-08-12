import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName='Test ever';
  serverCreated = false;
  servers = ['Testserver','Testserver 2']
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    
    if(this.serverName!==''){
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }else{
      this.serverCreationStatus='No server was created!';
    }
  }

  onUpdateServerName(event:Event){
    console.log(event)
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
 