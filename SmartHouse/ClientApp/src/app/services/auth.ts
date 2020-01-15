import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user'

const initialState: User = { 
    role: undefined,
    login: undefined,
    fullName: undefined 
}

@Injectable()
export class AuthenticationService {
    private User: User;
    constructor(private http: HttpClient){
        this.User = initialState;
    }
    public get isAuthorization(): boolean{
        return this.User !== initialState;
    }
    public get getUser(): User {
        return this.User
    }
    public login(login: string, password: string): boolean{        
        try{
            this.http.post('/api/user/Login', {login: login, password: password}).subscribe((data:any) => {
                this.User = data as User;
                localStorage.setItem('token', data.token)
                return true
            })
        }
        catch(error){
            console.log(error);
        }
        return false
    }
    public logout (){
        this.User = initialState;
        localStorage.removeItem('token')
    }
    public authWithToken(){
        if (localStorage.getItem('token') !== undefined){
            this.http.get('/api/authToken').subscribe((data:any) => {
                this.User = data as User;
            })
        }
    }
}