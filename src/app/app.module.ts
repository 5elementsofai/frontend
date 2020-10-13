import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TreoModule } from '@treo';
import { TreoMockApiModule } from '@treo/lib/mock-api';
import { TreoConfigModule } from '@treo/services/config';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { appConfig } from 'app/core/config/app.config';
import { CoreModule } from 'app/core/core.module';
import { mockDataServices } from 'app/data/mock';
import { LayoutModule } from 'app/layout/layout.module';
import { environment } from 'environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import { ProductEffects } from './modules/product/state/product.effects';
import { productReducer } from './modules/product/state/product.reducer';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Treo & Treo Mock API
        TreoModule,
        TreoConfigModule.forRoot(appConfig),
        TreoMockApiModule.forRoot(mockDataServices),

        // Core
        CoreModule,

        // Layout
        LayoutModule,

        // 3rd party modules
        MarkdownModule.forRoot({}),

        // ngrx
        StoreModule.forRoot({}),
        StoreModule.forFeature('products', productReducer),
        StoreDevtoolsModule.instrument({
            name: 'AI Platform',
            maxAge: 25,
            logOnly: environment.production
        }),
        EffectsModule.forRoot([ProductEffects]),

        // amplify
        AmplifyUIAngularModule,
        
        // Forms
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
