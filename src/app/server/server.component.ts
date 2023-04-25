import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
}

)

export class ServerComponent implements OnInit {

    // get data from (app component ) to child component(server component )  @Input

    @Input('srvelement') element: { type: string; name: string; content: string; } | any
    imagepath = 'https://s0.2mdn.net/simgad/6642625653691572713';
    values: string = ''; 
    values2: string = ''; 
    fullName='Arjun Thakur'

    constructor() {
    }

    ngOnInit() {

    }

    cooking(event: any) {
        console.log(event)
    }

//////event  without cast//////////

    onClick(event:any){
     this.values+=event.target.value + '|'
    }


    // Mouse Event (with  type)/////
    onkey(event:MouseEvent){
     this.values2+=(event.target as HTMLInputElement).value + '|'
    }

    submitName(event:any){
      console.log(event)
    }
}