import { Component, OnInit, EventEmitter, Output, ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  @Output('serCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput',{static: true}) serverContentInput:ElementRef; 
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }
}
