import { Router } from 'express';
import { BasedRoutes } from './BasedRoutes';
import { graphqlHTTP } from 'express-graphql';
import { indexGQL } from '../../models/graphql/schema.graphql';
import GraphQLController from '../../controllers/graph/GraphQLController';

export class GraphQL extends BasedRoutes {
  constructor(nameOfPath: string) {
    super(nameOfPath);
  }
  public setRoute (): Router {
    const router: Router = Router();
    router.use(
      `${this.nameOfPath}`,
      graphqlHTTP({
        schema: indexGQL,
        rootValue: GraphQLController,
        graphiql: true,
      }),
    );
    return router;
  }
}
