import { Router } from 'express';
import passport from 'passport';
import authController from '../../controllers/authController';
import links from '../../config/staticLinks';
import { BasedRoutes } from './BasedRoutes';

export class AuthRoutes extends BasedRoutes {
  constructor(nameOfPath: string) {
    super(nameOfPath);
  }
  public setRoute (): Router {
    const router: Router = Router();
    const { register, login, logout, refresh } = links.endpointType.actions
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
    router.get(
        `${this.nameOfPath}${logout}`,
        passport.authenticate('local', { session: false }),
        authController.logout,
    );
    return router;
  }
}
