import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export const loadProductsAction = createAction(
    '[Products] load'
);
export const loadProductsSuccessAction = createAction(
    '[Products] load successful',
    props<{ products: ProductModel[] }>()
);
export const loadProductAction = createAction(
    '[Products] load product',
    props<{ productId: number }>()
);
export const loadProductSuccessAction = createAction(
    '[Products] load product success',
    props<{ product: ProductModel }>()
);
export const errorAction = createAction(
    '[Products] error action',
    props<{ errors: string[] }>()
);
