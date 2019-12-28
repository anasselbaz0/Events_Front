import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {User} from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  role: string;

  ngOnInit() {}

  onSubmit() {
    const u: string = this.loginForm.controls['username'].value;
    const p: string = this.loginForm.controls['password'].value;
    // @ts-ignore
    if ( this.authService.login(new User(u, p, this.role)) ) {
      console.log('Login successful');
      this.router.navigateByUrl('/home');
    } else {
      console.log('Login failed');
      this.router.navigateByUrl('/');
    }
  }


}
