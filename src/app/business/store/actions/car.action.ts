import { createAction, props } from "@ngrx/store";
import { Car } from "src/app/models/cars.model";

export const getCar = createAction(
    '[Cars] get Cars',
    props<{id: string}>()
    );

export const getCarSuccesss = createAction(
    '[Cars] get Cars Success',
    props< {car: Car}>()
    );
    
export const getCarError = createAction(
    '[Cars] get Cars Success',
    props< {payload : any}>()
);