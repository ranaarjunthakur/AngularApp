import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public CData: number | undefined;

  fruits = ['Mengo', 'Orange', 'Banana'];

  // send data parent (app component ) to child component (server component) @Input

  serverElements = [{type:'server',name:'TestServer',content:'just a Test'}]


// get data from child (cockpit component) to parent(app component) @Output

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent, 
    })
  }

  onBlueprintAdded(bluePrintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:bluePrintData.serverName,
      content:bluePrintData.serverContent, 
    })
  }

  addFruit(item:any) {
    this.fruits.push(item);
  }  
  
}
