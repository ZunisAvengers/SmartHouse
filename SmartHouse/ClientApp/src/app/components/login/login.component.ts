import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-com',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loading: boolean;
  submited: boolean;
  errorMessage:string;
  loginForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }
    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['',[Validators.minLength(5), Validators.maxLength(10), Validators.required]],
      password: ['',[Validators.minLength(5), Validators.maxLength(10), Validators.required]]
    })      
    this.submited = false
    this.loading = false
    this.errorMessage = ''
  }

  get f(){return this.loginForm.controls}
      
  onSubmit(value: any){
    this.submited = true
    if(this.loading = this.loginForm.valid){        
      if(this.loading = this.submited = this.auth.login(value.login, value.password)){
        this.router.navigate([''])
      }
      else {
        this.errorMessage = 'Логин или Пароль введены неверно'           
      }
    }
  }
}
