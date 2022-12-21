try {
  const compression = require('compression');
  const express = require('express');
  const next = require('next');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const path = require('path');
  const cors = require('cors');

  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    require('dotenv').config({
      path: path.resolve(process.cwd(), '.env.production'),
    });
  } else {
    require('dotenv').config();
  }

  const port = parseInt(process.env.PORT, 10) || 8000;
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  const Router = require('./routes').Router;

  const corsOptions = {
    origin: '*',
    // credentials: true, //access-control-allow-credentials:true
    // optionSuccessStatus: 200,
  };

  const oneYear = 1 * 365 * 24 * 60 * 60 * 1000;

  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = express();
    // server.use(cors()); // Use this after the variable declaration
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    // fb(server);
    // compress all requests
    if (isProd) {
      server.use(compression());
    }
    server.use(express.static(path.join(__dirname, '/.next')));
    // Caches the static files for a year.
    server.use('/', express.static(__dirname + '/public/', { maxAge: oneYear }));

    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );
    server.use(cookieParser());

    server.use((req, res, next) => {
      res.header('origin', '*');
      // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      // res.header('Access-Control-Allow-Credentials', true);
      if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
      }
      next();
    });

    Router.forEachPrettyPattern((page, pattern, defaultParams) =>
      server.get(pattern, (req, res) => {
        app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params));
      })
    );

    // server.get( '/p/:slug', ( req, res ) => {
    //     const postId = parseInt( req.params.slug.split( '-' ).pop() );

    //     const queryParams = { id: postId };
    //     app.render( req, res, '/post', queryParams );
    // } );
    // server.get("/", (req, res) => {
    //   return app.render(req, res, "/", req.query);
    // });
    // server.get("/about", (req, res) => {
    //   return app.render(req, res, "/about", req.query);
    // });

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    const faviconOptions = {
      root: __dirname + '/static/img/',
    };
    server.get('/favicon.ico', (req, res) =>
      res.status(200).sendFile('favicon.ico', faviconOptions)
    );

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.warn(`Ready on http://localhost:${port}`);
    });
  });
} catch (error) {}
