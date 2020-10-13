import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
        private formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.productForm = this.formBuilder.group({

        });
    }

    public saveAndClose(): void {
        const input: CreateProductInput = {
            name: 'sandbox',
        };
        this.apiService.CreateProduct(input)
            .then((value: CreateProductMutation) => {
                console.log('CreateProduct then', value);
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
