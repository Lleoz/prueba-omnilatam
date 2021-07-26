import { Action, createReducer, on, State } from "@ngrx/store";
import { Car } from "src/app/models/cars.model";
import { getCars, getCarsSuccesss, getCarsError } from '../actions'

export interface CarsState {
    cars: Car[],
    loading: boolean,
    loaded: boolean,
    error: any
}

export const carsInitialState: CarsState = {
    cars: [],
    loading: false,
    loaded: false,
    error: null
}

const _carsReducer = createReducer(
    carsInitialState,
    on(getCars, state => ({ ...state, loading: true })),
    on(getCarsSuccesss, (state, {cars}) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        cars
    })),
    
    on(getCarsError, (state, {payload}) => ({ 
        ...state, 
        loading: false, 
        loaded: false,
        error: payload
    }))
    );
    
    
    
    export function carsReducer(state, action: Action) {
        return _carsReducer(state, action);
    }