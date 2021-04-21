import { Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware'
import axios from "axios";
const httpProxy = require('http-proxy');

// Create a proxy and listen on port 3000
const proxy = httpProxy.createProxyServer({});
export default {
    findVideo: async (req: any, res: Response): Promise<any> => {
        try {

            // proxy.web(req, res, { target: `${req.protocol}://${req.hostname}` });
            const z = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDb}&t=bl&plot=full`, {
                proxy: {
                    host: 'localhost',
                    port: 3001
                }
            });
            return res.send({ z });
        } catch (error) {
            throw error
        }
    },
}
