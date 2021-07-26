import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderNegotiatorServiceStoreService } from 'src/app/business/order-negotiator-services-store/order-negotiator-services-store.service';
import { Car } from 'src/app/models/cars.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listCards : Array<Car> = [];
  listCardHTML : Array<Car> = [];
  listBranch : Array<string> = [];
  
  constructor(private orderNegotiator: OrderNegotiatorServiceStoreService) { }

  ngOnInit(): void {
    this.orderNegotiator.getCars().subscribe( cars =>{
      this.listCards = cars.cars;
      this.reset();
      this.listCards.forEach(element => {
        if( !this.listBranch.find(branch => branch == element.brand) )
        this.listBranch.push(element.brand);
      });
    });
    
  }

  buscador(brand: string){
    this.reset();
    this.listCardHTML = this.listCards.filter( car => car.brand === brand);
  }

  reset(){
    this.listCardHTML = this.listCards;
  }

}
