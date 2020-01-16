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
    private User: User = initialState;

    constructor(private http: HttpClient) { }

    public get isAuthorization(): boolean{
        return this.User !== initialState;
    }

    public get getUser(): User {
        return this.isAuthorization ? this.User : null
    }

    public login(login: string, password: string): boolean{        
        try{
            this.http.post('/user/Login', {login: login, password: password}).subscribe((data:any) => {
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
            this.http.get('/user/authToken').subscribe((data:any) => {
                this.User = data as User;
            })
        }
    }
}