import { createSchema } from 'graphql-yoga';

import type { ProductRest } from './src/products/types/product.rest.ts';
import { products } from './src/products/products.mock.ts';

const schema = createSchema({
  typeDefs: `
    type Product {
      combined: String!
      direct: String!
      id: ID!
      resolved: String!
    }

    type Query {
      products: [Product!]!
    }`,
  resolvers: {
    Product: {
      combined: (parent: ProductRest) => parent.direct + parent.resolved,
      resolved: (parent: ProductRest) => parent.resolved,
    },
    Query: {
      products: () => products,
    },
  },
});

export default schema;
