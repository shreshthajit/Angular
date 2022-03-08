import { Component, OnInit,EventEmitter ,Output,ViewChild, ElementRef} from '@angular/core';
 
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{serverName: string,serverContent: string}>();
  @Output('bpCreated') bluePrintCreated=new EventEmitter<{serverName: string,serverContent: string}>();


  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  constructor() {
    
  }

  ngOnInit(){
  }

  onAddServer(nameInput) {
      this.serverCreated.emit({
        // serverName:this.newServerName,
        serverName:nameInput.value,
        serverContent:this.serverContentInput.nativeElement.value,
      });
  }

  onAddBluePrint(nameInput) {
    this.bluePrintCreated.emit({
      // serverName:this.newServerName,
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value,
    });
  }
}
