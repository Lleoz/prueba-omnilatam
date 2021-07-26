import { createAction, props } from "@ngrx/store";
import { Car } from "src/app/models/cars.model";

export const getCars = createAction('[Cars] get Cars');

export const getCarsSuccesss = createAction(
    '[Cars] get Cars Success',
    props< {cars: Car[]}>()
);

export const getCarsError = createAction(
    '[Cars] get Cars Success',
    props< {payload : any}>()
);