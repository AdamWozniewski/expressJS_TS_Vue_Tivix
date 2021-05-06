import { buildSchema } from 'graphql';
import UserSchema from './schemas/schema.user';

const indexGQL: any = buildSchema(UserSchema);

export { indexGQL };