import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState{
    cars: reducers.CarsState,
    car: reducers.CarState
}

export const appReducers: ActionReducerMap<AppState> = {
    cars: reducers.carsReducer,
    car: reducers.carReducer
}