import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ListProductsQuery } from 'app/API.service';
import { Observable } from 'rxjs';
import { loadProductsAction } from '../../state/product.actions';
import { getErrors, getProducts, State } from '../../state/product.reducer';
import { ProductCreationComponent } from '../product-creation/product-creation.component';

@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductListComponent implements OnInit {
  // public productsQuery$: Observable<ListProductsQuery>;
  public errors$: Observable<string[]>;
  public products: any[] = [];

  public constructor(private store: Store<State>, private matDialog: MatDialog) {
  }

  public ngOnInit(): void {
    // this.productsQuery$ = this.store.select(getProducts);
    this.errors$ = this.store.select(getErrors);

    this.store.select(getProducts).subscribe((query: ListProductsQuery) => {
      console.log('query', query);
      if (query) {
        this.products = query.items;
      }
    });

    this.store.dispatch(loadProductsAction());
  }

  public openCreationDialog(): void {
    const dialogRef = this.matDialog.open(ProductCreationComponent);
  }
}
