import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;
  @Field(() => String)
  direct: string;
  @Field(() => String)
  resolved: string;
  @Field(() => String)
  combined: string;
}
