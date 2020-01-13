import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../services/auth'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-com',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  errorMessages: string[];
  loginForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder
    ) { }
  
  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]]
    })
  }

  public onSubmit(){
    
    try{
      this.auth.login(this.f.login.value, this.f.password.value)
    }catch{
      
    }    
  }
}
