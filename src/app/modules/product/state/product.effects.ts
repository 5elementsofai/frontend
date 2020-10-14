import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { errorAction, loadProductAction, loadProductsAction, loadProductsSuccessAction, loadProductSuccessAction, updateProductAction } from './product.actions';

@Injectable()
export class ProductEffects {
    public loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProductsAction),
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => loadProductsSuccessAction({ products })),
                catchError(error => of(errorAction({ errors: [error] })))
            ))
        );
    });

    public loadProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProductAction),
            switchMap((value, index) => {
                return this.productService.getProduct(value.productId).pipe(
                    map(product => loadProductSuccessAction({ product })),
                    catchError(error => of(errorAction({ errors: [error] })))
                );
            })
        );
    });

    public updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateProductAction),
            switchMap((value, index) => {
                return this.productService.updateProduct(value.product, value.productId).pipe(
                    map(product => loadProductSuccessAction({ product })),
                    catchError(error => of(errorAction({ errors: [error] })))
                );
            })
        );
    });

    constructor(private actions$: Actions, private productService: ProductService) {

    }
}
