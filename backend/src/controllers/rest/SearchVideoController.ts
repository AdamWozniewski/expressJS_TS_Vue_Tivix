import { Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import messages from './../../static/messages.json';

export class SearchVideoController {
  static findVideo (req: any, res: Response, next: any): any {
    let reqQuery = {};
    Object.keys(req.query).forEach(prop => {
      if (req.query[prop] !== '') reqQuery[prop] = req.query[prop];
    });
    const query = Object.entries(reqQuery).map(arr => arr.join('=')).join('&');
    return createProxyMiddleware({
      target: `https://www.omdbapi.com/?apikey=${process.env.OMDb}&${query}&plot=full`,
      changeOrigin: true,
      ws: true,
      pathRewrite: {},
    })(req, res, next);
  }
}