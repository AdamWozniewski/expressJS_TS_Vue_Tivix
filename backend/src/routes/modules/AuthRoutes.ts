import { Router } from 'express';
import passport from 'passport';
import authController from '../../controllers/authController';
import links from '../../config/staticLinks';
import { BasedRoutes } from './BasedRoutes';
import { authorisationJWT } from '../../middlewares/auth';

export class AuthRoutes extends BasedRoutes {
  constructor(nameOfPath: string) {
    super(nameOfPath);
  }
  public setRoute (): Router {
    const router: Router = Router();
    const { register, login, logout, refresh, userInformation } = links.endpointType.actions
    router.post(
        `${this.nameOfPath}${register}`,
        authController.register,
    );
    router.post(
        `${this.nameOfPath}${login}`,
        passport.authenticate('local', { session: false }),
        authController.login,
    );
    router.post(
        `${this.nameOfPath}${refresh}`,
        authController.refresh,
    );
    router.post(
        `${this.nameOfPath}${logout}`,
        authorisationJWT,
        authController.logout,
    );
    router.get(
        `${this.nameOfPath}${userInformation}`,
        authorisationJWT,
        authController.userInformation,
    );
    return router;
  }
}
