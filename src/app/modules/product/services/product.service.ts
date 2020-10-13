import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public customerAnalyticsCategory: CategoryModel = {
    title: 'Customer analytics',
    slug: `customer-analytics`,
  };

  public products: ProductModel[] = [{
    id: 1,
    title: 'Document Analyser',
    image: 'assets/images/cases/customer_segmentation.jpg',
    description: ``,
    category: this.customerAnalyticsCategory,
    features: [
      {
        title: 'Payment',
        type: 'basic',
        icon: 'work'
      }
    ],
    services: [{
      title: 'Questions answering',
      type: 'basic',
      icon: 'work'
    }],
    solutions: [
      {
        title: 'Mailing & Newsletter',
        type: 'basic',
        icon: 'work'
      }
    ]
  }, {
    id: 2,
    title: 'Risk based testing',
    image: 'assets/images/cases/customer_segmentation.jpg',
    description: ``,
    category: {
      title: '1&1 Internet AG',
      slug: 'oneandone'
    },
    features: [
      {
        title: 'Database'
      }
    ],
    services: [
      {
        id: 20,
        title: 'Website audit',
        image: 'assets/images/cases/website_audit.jpg',
        description: ``,
        category: {
          title: 'Web analytics',
          slug: 'web-analytics',
        },
      }
    ],
    solutions: [],
  }, {
    id: 3,
    title: 'Customer churn reducer',
    image: 'assets/images/cases/customer_segmentation.jpg',
    description: ``,
    category: this.customerAnalyticsCategory,
    features: [],
    services: [],
    solutions: [],
  }];

  public getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }

  public getProduct(productId: number): Observable<ProductModel> {
    const productOfUndefined = this.products.find(product => product.id == productId);

    if (productOfUndefined) {
      return of(productOfUndefined);
    }

    throw new Error(`Product with id ${productId} not available`);
  }
}
