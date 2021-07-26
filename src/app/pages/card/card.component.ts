import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { OrderNegotiatorServiceStoreService } from 'src/app/business/order-negotiator-services-store/order-negotiator-services-store.service';
import { getCar } from 'src/app/business/store/actions';
import { AppState } from 'src/app/business/store/app.reducers';
import { Car } from 'src/app/models/cars.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() car: Car;

  @ViewChild('modalMensaje') modal: ElementRef;
  mensajeInicial: any;
  listCards: Car[];
  carSelected: Car;
  listcharacteristics: Array<string> = [];
  listChracteristicsValues: Array<string> = [];

  constructor(
    private orderNegotiator: OrderNegotiatorServiceStoreService,
    private modalService: NgbModal
  ) { }

  optionsModal = {
    animation: true,
    size: 'lg'
  }

  ngOnInit(): void {
    this.orderNegotiator.getCars().subscribe( cars =>{
      this.listCards = cars.cars;
    });
  }

  onClickSelect(id){
    this.orderNegotiator.setCar(id);
    this.abrirModal(this.modal, id);
  }

  abrirModal(modal, id){
    this.carSelected = this.listCards.filter(car => car.id === id)[0];
    this.listcharacteristics = Object.keys(this.carSelected.characteristics);
    this.modalService.open(modal, this.optionsModal);
  }

}
