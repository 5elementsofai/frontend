import { Injectable } from '@angular/core';
import { APIService, GetProductQuery, ListProductsQuery, ModelProductConditionInput, UpdateProductInput, UpdateProductMutation } from 'app/API.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiService: APIService) {
  }

  public getProducts(): Observable<ListProductsQuery> {
    const products = this.apiService.ListProducts();
    return from(products);
  }

  public getProduct(productId: string): Observable<GetProductQuery> {
    const product = this.apiService.GetProduct(productId);
    return from(product);
  }

  public updateProduct(product: object, productId: string): Observable<UpdateProductMutation> {
    const input: UpdateProductInput = {
      id: productId,
      name: 'sandbox 3'
    };
    const updateProductMutation = this.apiService.UpdateProduct(input);

    return from(updateProductMutation);
  }
}
