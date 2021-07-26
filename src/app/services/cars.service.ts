import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Car } from "../models/cars.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CarService{
    constructor(private httpService: HttpClient){}

    getCars(): Observable<Array<Car>>{
        return this.httpService.get<Array<Car>>('../../assets/JSON/cars.json').pipe(
            map( resp => resp['cars'])
        )
    }
}