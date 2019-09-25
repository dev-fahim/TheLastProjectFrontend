import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    if(this._authService.isLoggedIn()) this._router.navigate(['/app/bill/add']);
  }

  login_form = new FormGroup({
    username: new FormControl("", Validators.minLength(4)),
    email: new FormControl(""),
    password: new FormControl("", Validators.minLength(8))
  })

  onSubmit(){
    console.log(this.login_form.value);
    return this._authService.login_user(this.login_form.value).subscribe();
  }

}
