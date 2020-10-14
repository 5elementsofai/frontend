import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TreoNavigationItem } from '@treo/components/navigation';
import { GetProductQuery } from 'app/API.service';
import { loadProductAction, updateProductAction } from '../../state/product.actions';
import { getProduct, State } from '../../state/product.reducer';

@Component({
    selector: 'products',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    public productId: string;
    public product: GetProductQuery;

    public drawerMode = 'side';
    public drawerOpened = true;
    public scrollMode = 'inner';

    public productNameForm: FormGroup = new FormGroup({
        name: new FormControl(),
    });

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
            title: 'Solutions',
            subtitle: 'Solutions, Features and Services',
            type: 'group',
            children: [
                {
                    title: 'Solutions',
                    type: 'basic',
                    icon: 'settings',
                    link: './services',
                },
                {
                    title: 'Services',
                    type: 'basic',
                    icon: 'settings',
                    link: './services',
                },
                {
                    title: 'Features',
                    type: 'basic',
                    icon: 'settings',
                    link: './services',
                },
            ]
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
        this.store.select(getProduct).subscribe((product: GetProductQuery) => {
            console.log('productQuery', product);
            if (product) {
                this.product = product;
            }
        });

        this.route.params.subscribe(params => {
            this.productId = params.id;
            this.store.dispatch(loadProductAction({ productId: params.id }));
        });
    }

    public updateProduct(): void {
        this.store.dispatch(updateProductAction({ productId: this.productId, product: {} }));
    }

    public updateProductName(): void {
        this.store.dispatch(updateProductAction({ productId: this.productId, product: {} }));
    }

    public createApplication(): void {

    }
}
