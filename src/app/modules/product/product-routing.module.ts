import { Route } from '@angular/router';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductMembersComponent } from './components/product-members/product-members.component';
import { ProductServicesComponent } from './components/product-services/product-services.component';
import { ProductSettingsComponent } from './components/product-settings/product-settings.component';
import { ProductViewsComponent } from './components/product-views/product-views.component';

export const routes: Route[] = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: ':id',
        component: ProductDetailComponent,
        children: [
            {
                path: 'settings',
                component: ProductSettingsComponent,
            },
            {
                path: 'data',
                component: ProductDataComponent,
            },
            {
                path: 'members',
                component: ProductMembersComponent,
            },
            {
                path: 'services',
                component: ProductServicesComponent,
            },
            {
                path: 'views',
                component: ProductViewsComponent,
            },
        ]
    },
];
