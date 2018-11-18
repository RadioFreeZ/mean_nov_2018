import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {title: '', price: 0, img: ''}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.getProductFromService(params['id']);
    })
  }

  updateCurrentProduct() {
    let observable = this._httpService.updateProduct(this.product);
    observable.subscribe((data) => {
      console.log('product updated! ' + this.product);
      if (data['err']) {

      } else {
        this.product = {title: '', price: 0, img: '', _id: ""};
        this._router.navigate(['products']);
      }
    });
  }
  destroyProduct(product) {
    let observable = this._httpService.deleteProduct(product._id);
    observable.subscribe(() => {
      console.log('product destroyed! ' + product._id);
    });
    this._router.navigate(['products']);
  }
  getProductFromService(id) {
    let observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      this.product = data['data'];
    })
  }
}
