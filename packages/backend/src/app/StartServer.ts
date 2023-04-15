import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
import express, { Application, Request, Response } from 'express';
// import socketIo ,{ Server as SocketIOServer } from 'socket.io';
import mongoose, { Mongoose } from 'mongoose';
import { engine } from 'express-handlebars';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { createServer, Server as HttpServer } from 'http';
import cookieParser from 'cookie-parser';
import { IndexRoute } from '../routes/IndexRoute';
import { Admin } from '../config/adminCreate';
import dbConfig from '../config/database';
import { setPassport } from '../config/passport';
import { ALLOW, api } from '../static/values';

export class StartServer {
  private readonly app: Application;
  private server: HttpServer;
  // private io: SocketIOServer;
  private db: Mongoose;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    // this.io = socketIo(this.server);
    this.db = mongoose;

    setPassport();
    this.setStaticConfig();
    this.startServer();
    // Standardowa strona
    this.setEngine();
    // REST API
    this.setRouter();

    this.setDatabaseConnect();
    Admin.adminCreate();
  }

  private async setRouter() {
    this.app.use(api, await new IndexRoute().getRoutes());
    this.app.get('/', (req, res) => {
      res.render('post', {
        listExists: true,
        posts: [
          {
            author: 'Janith Kasun',
            image: 'https://picsum.photos/500/500',
            comments: [
              'This is the first comment',
              'This is the second comment',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.',
            ],
          },
          {
            author: 'John Doe',
            image: 'https://picsum.photos/500/500?2',
            comments: [],
          },
        ],
      });
    });
  }

  private setEngine() {
    this.app.set('view engine', 'hbs');
    this.app.set('views', './src/templates');
    this.app.engine(
      'hbs',
      engine({
        defaultLayout: 'index',
        extname: '.hbs',
        helpers: {
          getShortText: (text: string) =>
            text.length < 64 ? text : `${text.substring(0, 64)}...`,
        },
      }),
    );
    this.app.enable('view cache');
  }

  private setDatabaseConnect() {
    const mongo: string = `${dbConfig.mongoUrl}${process.env.MONGO_DATABASE_NAME}`;
    const { settings, databaseActions } = dbConfig;
    this.db.connect(mongo, settings);
    this.db.Promise = global.Promise;
    for (const { type, callback } of databaseActions) {
      if (type === 'error')
        this.db.connection.on(type, () => {
          console.log(callback);
          this.db.connect(mongo, settings);
        });
      else this.db.connection.on(type, () => console.log(callback));
    }
  }

  private setStaticConfig() {
    this.app.use(
      cors({
        origin: '*',
        credentials: true,
        exposedHeaders: ['Set-Cookie', 'Date', 'ETag'],
      }),
    );
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    this.app.use((req: Request, res: Response, next: any) => {
      const accessControlAllow = 'Access-Control-Allow-';
      res.header(`${accessControlAllow}Origin`, '*');
      res.header(`${accessControlAllow}Methods`, '*');
      res.header(`${accessControlAllow}Headers`, 'Content-Type, Authorization');

      if ('OPTIONS' == req.method) res.send(ALLOW);
      else next();
    });
    this.app.use(express.static(path.join(__dirname, '../../../dist/')));
  }

  private startServer() {
    this.server.listen(process.env.PORT, () =>
      console.log('\x1b[36m', 'Serwer uruchomiony'),
    );
  }

  public static bootstrap(): StartServer {
    return new StartServer();
  }
}
