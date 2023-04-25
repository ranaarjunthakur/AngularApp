import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  constructor(private router:Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)

    this.route.queryParams.subscribe((res)=>{
      console.log(res)
    })
    this.route.fragment.subscribe((res)=>{
      console.log(res)
    })
  }

  firstpage(){
    this.router.navigate(['/firstPage'])
  }
}
