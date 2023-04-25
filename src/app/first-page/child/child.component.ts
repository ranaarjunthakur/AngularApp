import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


interface Products {
  id: any;
  name: string;
  description: string
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  Data: Products = <Products>{}
  userID: any;
  paramsSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.Data = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      description: this.route.snapshot.params['description'],
    }

    console.log(this.Data)

    this.paramsSubscription = this.route.paramMap.subscribe((params: Params) => {
      this.Data.id = params['id'];
      this.Data.name = params['name']
      this.Data.description = params['description']
      console.log(params)
    })
  
    // this.route.paramMap.subscribe((params) => {
    //   console.log(params.get('name'))
    //   this.userID = this.route.snapshot.paramMap.get("id");
    //   console.log(this.userID)
    //   });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }
}
