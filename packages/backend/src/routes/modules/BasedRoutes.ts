import { Router } from 'express';
import { SetRoute } from '../../interfaces/SetRoute';

export class BasedRoutes implements SetRoute {
  constructor(protected nameOfPath: string) {
    this.nameOfPath = nameOfPath;
  }

  setRoute(): Router {
    return undefined;
  }
}
