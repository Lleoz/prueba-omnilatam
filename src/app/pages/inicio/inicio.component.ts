import { Component, OnInit } from '@angular/core';
import { OrderNegotiatorServiceStoreService } from 'src/app/business/order-negotiator-services-store/order-negotiator-services-store.service';
import { Car } from 'src/app/models/cars.model';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listCars: Array<Car> = [];

  constructor(
    private orderNegotiator: OrderNegotiatorServiceStoreService
  ) { }

  ngOnInit(): void {
    this.orderNegotiator.getCarsFromService();
  }
}
