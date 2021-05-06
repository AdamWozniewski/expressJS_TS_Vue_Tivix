import { Router } from 'express';
import passport from 'passport';
import AuthController from '../../controllers/rest/AuthController';
import links from '../../config/staticLinks';
import { BasedRoutes } from './BasedRoutes';
import { authorisationJWT } from '../../middlewares/auth';

export class AuthRoutes extends BasedRoutes {
  constructor(nameOfPath: string) {
    super(nameOfPath);
  }
  public setRoute (): Router {
    const router: Router = Router();
    const { register, login, logout, refresh, userInformation } = links.actions;
    router.post(`${this.nameOfPath}${register}`, AuthController.register);
    router.post(`${this.nameOfPath}${login}`, passport.authenticate('local', { session: false }), AuthController.login);
    router.post(`${this.nameOfPath}${refresh}`, AuthController.refresh);
    router.post(`${this.nameOfPath}${logout}`, AuthController.logout);
    router.get(`${this.nameOfPath}${userInformation}`, authorisationJWT, AuthController.userInformation);
    return router;
  }
}
