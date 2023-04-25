import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {


  @Input() data: string[] | any;

  @Output() childEvent = new EventEmitter();
   PData: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:any) {
    this.childEvent.emit(value);
  }

}
