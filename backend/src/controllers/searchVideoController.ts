import { Response } from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware'
import axios from "axios";
// const httpProxy = require('http-proxy');
import http from 'http';
// var request = require('request');
const proxy = require('express-http-proxy');
// const proxy = httpProxy.createProxyServer({});
export default {
    findVideo: async (req: any, res: Response): Promise<any> => {
        console.log('weszlo')
        try {
            const d = proxy.web(req, res, { target: `http://www.omdbapi.com/?apikey=${process.env.OMDb}&t=bl&plot=full` })
            console.log(d)
            return res.send({ abc: 'afasff' });
        } catch (error) {
            throw error
        }
    },
}
