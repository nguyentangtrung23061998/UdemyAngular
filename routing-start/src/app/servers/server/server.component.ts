import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];//ép kiểu qua số
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.server = this.serversService.getServer(+params['id']);
    //     console.log(this.server)
    //   }
    // )
    this.route.data.subscribe(
      (data:Data)=>{
        this.server = data['server'];
      }
    )
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
  }
}
