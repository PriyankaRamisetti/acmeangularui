import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LogoutService } from '../logout.service';
@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.css']
})
export class PlandetailsComponent implements OnInit {
  public data:any = [];
  planname!:string;
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient, private logoutService: LogoutService) { }

  ngOnInit(): void {
      this.route.queryParams
    .pipe(filter((params:any) => params.name))
    .subscribe((params: any) => {
      console.log(params); 
      this.planname = params.name;
      console.log(this.planname); 
   });
    if(this.planname== null)
    {
      this.router.navigate(["./plans"]);
    }
    var body = {"plan_name":this.planname};
    this.http.post<any>("http://localhost:3000/plandetails",body).subscribe(response=>{
      console.log(response);
      this.data=response;
    })
  
}

Activate() {
  if(confirm("Do you want to activate the plan")) {
    alert("You have successfully subscribed to this paln");
    this.router.navigate(["../../plans"]);
   }
 
}

logout(){
   this.logoutService.logout();
     }
  }
  

