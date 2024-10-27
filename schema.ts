import { buildSchema } from 'type-graphql';

import { ProductQueries } from './src/products/product.queries.ts';
import { ProductResolver } from './src/products/product.resolver.ts';

export function createTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [ProductQueries, ProductResolver],
  });
}
