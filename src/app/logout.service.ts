import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  returnUrl= "../../login";
  constructor(private router: Router) { }
  
  logout()
  {
  
    localStorage.removeItem('currentUser');
    localStorage.clear();
     this.router.navigate([this.returnUrl]);
  }
}
