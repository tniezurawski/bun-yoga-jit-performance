import 'reflect-metadata';
import { Query, Resolver } from 'type-graphql';
import { Product } from './types/product.model.ts';

import { products } from './products.mock.ts';

@Resolver()
export class ProductQueries {
  @Query(() => [Product])
  products() {
    return products;
  }
}
