import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { ListProductsQuery } from 'app/API.service';
import { AppState } from '../../../states/app.state';
import { ProductModel } from '../models/product.model';
import { errorAction, loadProductsSuccessAction, loadProductSuccessAction } from './product.actions';

export interface State extends AppState {
    products: ProductState;
}

export interface ProductState {
    products: ListProductsQuery;
    currentProduct?: ProductModel;
    currentProductId?: number;
    errors: string[];
    hasErrors: boolean;
}

const initialState: ProductState = {
    products: null,
    errors: [],
    hasErrors: false,
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);
export const getProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);
export const getErrors = createSelector(
    getProductFeatureState,
    state => state.errors
);
export const hasErrors = createSelector(
    getProductFeatureState,
    state => state.hasErrors
);

export const productReducer = createReducer<ProductState>(
    initialState,
    on(loadProductsSuccessAction, (state, action): ProductState => {
        return {
            ...state,
            products: action.products,
        };
    }),
    on(loadProductSuccessAction, (state, action): ProductState => {
        return {
            ...state,
            currentProduct: action.product,
        };
    }),
    on(errorAction, (state, action): ProductState => {
        return {
            ...state,
            hasErrors: true,
            errors: action.errors,
        };
    }),
);
