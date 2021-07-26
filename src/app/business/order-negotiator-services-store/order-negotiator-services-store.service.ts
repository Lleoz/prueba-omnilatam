import { Injectable } from '@angular/core';
import { getCars, getCar  } from '../../business/store/actions/';
import { Store } from '@ngrx/store';
import { AppState } from '../../business/store/app.reducers';
import { Observable } from 'rxjs';
import { CarsState } from '../store/reducers/cars.reducer';


@Injectable({
  providedIn: 'root'
})
export class OrderNegotiatorServiceStoreService {

  constructor( private store: Store<AppState>) { }

  getCarsFromService(){
    this.store.dispatch(getCars());
  }

  getCars(): Observable<CarsState>{
    return this.store.select('cars');
  }

  setCar(id) {
    this.store.dispatch(getCar({id}));
  }

}
