import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup
  public error!: string;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password:''
    })
  }


  login() {
    this.userService.login(this.loginForm.value).subscribe((d)=>{
      console.log(d)
      if (d.loggedIn) {
        this.router.navigate(['products'])
        this.loginForm.reset()
      }else
        this.error = "bad credential"
    })
  }
}
