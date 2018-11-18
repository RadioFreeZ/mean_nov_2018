import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct: {title: string, price: number, quantity: number};
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = { title: "", price: 0, quantity: 0}
  }

  postNewProduct() {
    console.log('got here');
    let observable = this._httpService.postProduct(this.newProduct);
    observable.subscribe((data) => {
      console.log('product submitted! ' + this.newProduct);
      if (data['err']) {

      } else {
        this.newProduct = {title: '', price: 0, quantity: 0};
        this._router.navigate(['products']);
      }
    });
  }

}
