import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }
loginHandler(loginFormData: any){
  console.log(loginFormData);

  this.authService.login(loginFormData.value)
  .subscribe( (res: any) => {
    console.log(res);

    if(res && res.token) {
      this.authService.saveToken(res.token);  // save token in browser storage-local/session storage
      // check whether browser has token in either local/sessionstorage
      // if valid-allow user
      // if invalid, show login page agin 
      
    }
  });
}

}
