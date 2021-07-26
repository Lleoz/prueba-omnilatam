import { Action, createReducer, on, State } from "@ngrx/store";
import { Car } from "src/app/models/cars.model";
import { getCar, getCarSuccesss, getCarError } from '../actions'

export interface CarState {
    id: string,
    car: Car,
    loading: boolean,
    loaded: boolean,
    error: any
}

export const carInitialState: CarState = {
    id: null,
    car: null,
    loading: false,
    loaded: false,
    error: null
}

const _carReducer = createReducer(
    carInitialState,
    on(getCar, (state, {id}) => ({
        ...state,
        loading: true,
        id: id
    })),

    on(getCarSuccesss, (state, {car}) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        car: { ... car}
    })),
    
    on(getCarError, (state, {payload}) => ({ 
        ...state, 
        loading: false, 
        loaded: false,
        error: payload
    }))
    );
    
    
    
    export function carReducer(state, action: Action) {
        return _carReducer(state, action);
    }