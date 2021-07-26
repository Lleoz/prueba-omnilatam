import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as carsActions from "../actions";
import { mergeMap, map, catchError} from 'rxjs/operators'
import { CarService } from '../../../services/cars.service';
import { of } from "rxjs";


@Injectable()
export class CarsEffects{
    constructor(
        private actions$: Actions,
        private carService: CarService
    ){}

    getCars$ = createEffect(
        (): any => this.actions$.pipe(
            ofType( carsActions.getCars ),
            mergeMap(
                () => this.carService.getCars()
                .pipe(
                    map(cars => carsActions.getCarsSuccesss( { cars: cars} )),
                    catchError( err => of(carsActions.getCarsError({payload: err})))
                )
            )
        )
    );
}