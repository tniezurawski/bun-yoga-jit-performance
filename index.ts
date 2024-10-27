import { createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { createTypeGraphQLSchema } from './schema.ts';

const schema = await createTypeGraphQLSchema();

const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  plugins: [useGraphQlJit()],
});

const server = Bun.serve({
  fetch: (request) => yoga(request),
  port: process.env.PORT || 3000,
});

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
);
