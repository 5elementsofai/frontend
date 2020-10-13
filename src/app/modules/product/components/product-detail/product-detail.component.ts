import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TreoNavigationItem } from '@treo/components/navigation';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { loadProductAction } from '../../state/product.actions';
import { getProduct, State } from '../../state/product.reducer';

@Component({
    selector: 'products',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    public product$: Observable<ProductModel>;
    public product: ProductModel;

    public drawerMode = 'side';
    public drawerOpened = true;
    public scrollMode = 'inner';

    public menu: TreoNavigationItem[] = [
        {
            title: 'Product',
            subtitle: 'Settings',
            type: 'group',
            children: [
                {
                    title: 'General',
                    type: 'collapsable',
                    icon: 'settings',
                    children: [{
                        title: 'Settings',
                        type: 'basic',
                        link: './settings',
                    }, {
                        title: 'Environments',
                        type: 'basic',
                    }, {
                        title: 'Entities',
                        type: 'basic',
                    }]
                },
                {
                    title: 'Data',
                    type: 'basic',
                    link: './data',
                    icon: 'folder'
                },
                {
                    title: 'Views',
                    type: 'basic',
                    link: './views',
                    icon: 'panorama',
                    children: [{
                        title: 'Menu',
                        type: 'basic',
                    }, {
                        title: 'Pages',
                        type: 'basic',
                    }, {
                        title: 'Theme',
                        type: 'basic',
                    }, {
                        title: 'Logo',
                        type: 'basic',
                    }]
                },
                {
                    title: 'Services',
                    type: 'basic',
                    link: './services',
                    icon: 'work',
                    children: [{
                        title: 'Services',
                        type: 'basic',
                    }, {
                        title: 'Install service',
                        type: 'basic',
                    }]
                },
                {
                    title: 'Users & Groups',
                    type: 'basic',
                    link: './members',
                    icon: 'people_alt',
                    children: [{
                        title: 'Authentication',
                        type: 'basic',
                    }, {
                        title: 'Users',
                        type: 'basic',
                    }, {
                        title: 'Groups',
                        type: 'basic',
                    }]
                },
            ]
        },
        {
            type: 'divider'
        },
        {
            title: 'Playground',
            type: 'basic',
            icon: 'play_arrow',
        },
        {
            type: 'divider'
        },
    ];

    public constructor(
        private route: ActivatedRoute,
        private store: Store<State>,
        private matIconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
    ) {
        this.matIconRegistry.addSvgIcon('oneandone', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/oneandone.svg'));
    }

    public ngOnInit(): void {
        this.store.select(getProduct).subscribe((product: ProductModel) => {
            console.log('product', product);
            if (product) {
                this.product = product;

                if (product.services.length > 0) {
                    this.menu.push({
                        title: 'Services',
                        type: 'group',
                        children: product.services.map(service => ({ ...service, type: 'basic' })),
                    });
                }
                if (product.solutions.length > 0) {
                    this.menu.push({
                        title: 'Solutions',
                        type: 'group',
                        children: product.solutions.map(solution => ({ ...solution, type: 'basic' })),
                    });
                }
                if (product.features.length > 0) {
                    this.menu.push({
                        title: 'Features',
                        type: 'group',
                        children: product.features.map(feature => ({ ...feature, type: 'basic' })),
                    });
                }
            }
        });

        this.route.params.subscribe(params => {
            this.store.dispatch(loadProductAction({ productId: params.id }));
        });
    }
}
