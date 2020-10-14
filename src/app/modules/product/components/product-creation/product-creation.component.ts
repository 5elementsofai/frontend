import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { APIService, CreateProductInput, CreateProductMutation } from 'app/API.service';

@Component({
    selector: 'product-creation',
    templateUrl: './product-creation.component.html',
    styleUrls: [
        './product-creation.component.scss',
    ],
})
export class ProductCreationComponent implements OnInit {
    public productForm: FormGroup;

    constructor(
        public matDialogRef: MatDialogRef<ProductCreationComponent>,
        private apiService: APIService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.productForm = this.formBuilder.group({
            name: new FormControl(),
        });
    }

    public saveAndClose(): void {
        const input: CreateProductInput = this.productForm.value;

        this.apiService.CreateProduct(input)
            .then((product: CreateProductMutation) => {
                console.log('CreateProduct then', product);

                this.router.navigate(['products', product.id]);
            })
            .catch((reason: any) => {
                console.log('CreateProduct catch', reason);
            })
            .finally(() => {
                console.log('CreateProduct finally');
                this.matDialogRef.close();
            });

    }
}
