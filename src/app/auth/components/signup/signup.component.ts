import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupInfo: any = {
    email:'eve.holt@reqres.in',
    password: 'pistol'
  };

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signupHandler(signupFormData): void {
    console.log(signupFormData.value);
    this.authService.signup(signupFormData.value)
    .subscribe( (res: any) => {
      console.log(res);
      alert('Signup successful! redirecting to login page');
      this.router.navigate(['login']);
    });

  }

}
