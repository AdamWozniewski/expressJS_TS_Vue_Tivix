import AuthService from './services/AuthService';
import FavouritesService from './services/FavouritesService';
import VideoService from './services/VideoService';

import { apiRouter } from './routes/apiRouter';
import { getCookie } from './assets/cookie';
import { RefreshToken } from './decorators/RefreshDecorator';

export * from './components';
export {
  AuthService,
  FavouritesService,
  VideoService,
  apiRouter,
  getCookie,
  RefreshToken,
};
