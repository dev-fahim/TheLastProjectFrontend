import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    if(this._authService.isLoggedIn()) this._router.navigate(['/app/main']);
  }

  login_form = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit(){
    console.log(this.login_form.value);
    return this._authService.login_user(this.login_form.value).subscribe();
  }

}
