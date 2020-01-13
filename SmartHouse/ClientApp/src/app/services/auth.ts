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
    public login(login: string, password: string){
        try{
            this.http.post('/api/login', {login: login, password: password}).subscribe((data:any) => {
                this.User = data as User;
                localStorage.setItem('token', data.token)
            })
        }
        catch(error){
            console.log(error);
        }
    }
    public defaultLogin(login: string, password: string){
        try{
            this.http.get('defaultUser.json').subscribe((data:any) => {
                this.User = data as User;
                localStorage.setItem('token', data.token)
            })
        }catch(error){
            console.log(error)
        }
    }
    public logout (){
        this.User = initialState;
        localStorage.removeItem('token')
    }
    public authToken(){
        if (localStorage.getItem('token') !== undefined){
            this.http.get('/api/authToken').subscribe((data:any) => {
                this.User = data as User;
            })
        }
    }
}