import { buildSchema } from 'graphql';
import UserSchema from './schemas/schema.user';

export const indexGQL = buildSchema(UserSchema);
