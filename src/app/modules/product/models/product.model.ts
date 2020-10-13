import { FeatureModel } from 'app/modules/solution/models/feature.model';
import { ServiceModel } from 'app/modules/solution/models/service.model';
import { SolutionModel } from 'app/modules/solution/models/solution.model';
import { CategoryModel } from './category.model';

export class ProductModel {
  public id: number;
  public title: string;
  public subtitle?: string;
  public image: string;
  public description: string;
  public category: CategoryModel;
  public services: any[];
  public solutions: any[];
  public features: any[];
}
