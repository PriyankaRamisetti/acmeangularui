import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm! : FormGroup;
 returnUrl!: string;
  constructor(private formbuilder:FormBuilder,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    localStorage.removeItem('currentUser');
    localStorage.clear();
  this.loginForm = this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  this.returnUrl="../../plans"
    
  }

  Submit()
  {
    console.log(this.loginForm.value);
    this.http.post<any>("http://localhost:3000/loginvalidate",this.loginForm.value).subscribe(response=>{
    console.log(response);
    if(response["status"] == "success")
    { 
      localStorage.setItem('currentUser','loginuser');
      this.router.navigate([this.returnUrl]);
     
   }
    else
    {
      alert("Username or Password is incorrect");
    }

  })

  }

}
