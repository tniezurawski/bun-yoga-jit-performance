import 'reflect-metadata';
import { FieldResolver, Resolver, Root } from 'type-graphql';
import { Product } from './types/product.model.ts';

import type { ProductRest } from './types/product.rest.ts';

@Resolver((of) => Product)
export class ProductResolver {
  @FieldResolver()
  combined(@Root() parent: ProductRest) {
    return parent.direct + parent.resolved;
  }

  @FieldResolver()
  resolved(@Root() parent: ProductRest) {
    return parent.resolved;
  }
}
