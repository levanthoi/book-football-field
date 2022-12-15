try {
  const compression = require('compression');
  const express = require('express');
  const next = require('next');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const path = require('path');
  const connectDB = require('./utilsServer/connectDB.js');

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

  const oneYear = 1 * 365 * 24 * 60 * 60 * 1000;

  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = express();
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

    // Connect Database
    connectDB(process.env.DATABASE_URL);

    Router.forEachPrettyPattern(
      (page, pattern, defaultParams) =>
        server.get(pattern, (req, res) => {
          app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params));
        }),

      // Route api
      server.use('/v1/auth', require('./api/auth.js')),
      server.use('/api/users', require('./api/user.js')),
      server.use('/api/blogs', require('./api/blog.js')),
      server.use('/api/pitchs', require('./api/pitch.js')),
      server.use('/api/location', require('./api/location.js')),
      server.use('/api/saleOff', require('./api/saleOff.js')),
      server.use('/api/booking', require('./api/booking.js'))
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
