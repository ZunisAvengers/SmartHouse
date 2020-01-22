import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { House } from '../models/house';
import { AuthenticationService } from './auth';

@Injectable()
export class SmartHouseService {
    private House: House

    constructor(
        private http: HttpClient,
        private auth: AuthenticationService
        ) { }
        

    public getHouse(){
        if (this.House === null){
            this.http.get('api/GetHouse',{
                headers:{
                
                }
            }).subscribe((House: any) =>
                this.House = House
            )
        }
        return this.House;
    }
    
    
}