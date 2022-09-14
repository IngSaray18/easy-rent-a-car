import { Component, OnInit } from '@angular/core';
import { Product } from "../../interfaces/product.modules";
import { FetchService } from "../../services/fetch.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private fetchservice: FetchService,

      ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.fetchservice.getConfig().subscribe(data =>{
      this.products = data;
      return data;


    })
  }

}
