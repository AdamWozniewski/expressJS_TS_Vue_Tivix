import { Response } from 'express';

import { createProxyMiddleware } from 'http-proxy-middleware';
export default {
    findVideo: async (req: any, res: Response, next: Function): Promise<any> => {
        // const z = await createProxyMiddleware({
        //     target: `http://www.omdbapi.com/?apikey=${process.env.OMDb}&t=bl&plot=full`,
        //     changeOrigin: true, // needed for virtual hosted sites
        //     ws: true, // proxy websockets
        //     pathRewrite: {}
        // })
        // console.log(z)
        // next();
    },
}
