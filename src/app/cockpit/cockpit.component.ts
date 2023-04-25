import { Component, OnInit, EventEmitter, Output,ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // None , Native , Emulated

})
export class CockpitComponent implements OnInit {


  // recieve data child  (cockpit component) to parent component (app component ) @Output

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // data binding two  way by [(ngmodel)] ////////
  
  public newServerName:string = '';
  public newServerContent:string = '';

///// @viewchild in angular ///////

  @ViewChild('localReference') localReference!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

// send or  bind (event binding) data child to parent component @outpot decorator

  onAddServer(data:any) {
    console.log(data.value) //  #local refrence using   ////
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.localReference.nativeElement.value
    })
    console.log(this.serverCreated)
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
       serverContent: this.localReference.nativeElement.value
    })
  }
}
