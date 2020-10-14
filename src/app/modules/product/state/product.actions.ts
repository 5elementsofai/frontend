import { createAction, props } from '@ngrx/store';
import { GetProductQuery, ListProductsQuery } from 'app/API.service';

enum ProductActionTypes {
    PRODUCTS_LOAD = '[Products] load',
    PRODUCTS_LOAD_SUCCESS = '[Products] load successful',
    PRODUCTS_LOAD_FAILURE = '[Products] load product',

    PRODUCT_LOAD_SUCCESS = '[Product] load product success',
    PRODUCT_UPDATE = '[Product] update',

    ERROR = '[Products] error action',
}

export const loadProductsAction = createAction(
    ProductActionTypes.PRODUCTS_LOAD
);
export const loadProductsSuccessAction = createAction(
    ProductActionTypes.PRODUCTS_LOAD_SUCCESS,
    props<{ products: ListProductsQuery }>()
);
export const loadProductAction = createAction(
    ProductActionTypes.PRODUCTS_LOAD_FAILURE,
    props<{ productId: string }>()
);
export const loadProductSuccessAction = createAction(
    ProductActionTypes.PRODUCT_LOAD_SUCCESS,
    props<{ product: GetProductQuery }>()
);
export const errorAction = createAction(
    ProductActionTypes.ERROR,
    props<{ errors: string[] }>()
);
export const updateProductAction = createAction(
    ProductActionTypes.PRODUCT_UPDATE,
    props<{ productId: string, product: object }>()
);
