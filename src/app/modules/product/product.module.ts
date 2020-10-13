import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TreoCardModule } from '@treo/components/card';
import { TreoNavigationModule } from '@treo/components/navigation';
import { ProductCreationComponent } from './components/product-creation/product-creation.component';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductMembersComponent } from './components/product-members/product-members.component';
import { ProductServicesComponent } from './components/product-services/product-services.component';
import { ProductSettingsComponent } from './components/product-settings/product-settings.component';
import { ProductViewsComponent } from './components/product-views/product-views.component';
import { routes } from './product-routing.module';
import { ProductEffects } from './state/product.effects';
import { productReducer } from './state/product.reducer';

@NgModule({
    declarations: [
        ProductCreationComponent,
        ProductDataComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductMembersComponent,
        ProductServicesComponent,
        ProductSettingsComponent,
        ProductViewsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        RouterModule.forChild(routes),
        StoreModule.forFeature('products', productReducer),
        EffectsModule.forFeature([ProductEffects]),

        // Treo
        TreoCardModule,
        TreoNavigationModule,

        // Material UI
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDividerModule,
        MatRadioModule,

        // Forms
        MatInputModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ],
})
export class ProductModule {

}
