import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogoutService } from '../logout.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  public data:any = [];
constructor(private router: Router,private logoutService: LogoutService,private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>("http://localhost:3000/plans").subscribe(response=>{
      console.log(response);
      this.data=response;
  
    })
  }
  Submit(planname:string){
      console.log(planname);
      this.router.navigate(
        ['/plandetails'],
        { queryParams: { name: planname } }
      );
  }
  logout(){
    this.logoutService.logout();
      }
}

