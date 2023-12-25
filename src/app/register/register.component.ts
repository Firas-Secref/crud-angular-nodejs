import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: '',
      password:''
    })
  }

  constructor(private userService: UserService, private fb: FormBuilder) {}

  register(){
    this.userService.register(this.registerForm.value).subscribe(()=>{
      console.log('register')
      this.registerForm.reset()
    })
  }

}
