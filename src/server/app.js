import http from 'http';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import swig from 'swig';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import serveFavicon from 'serve-favicon';
import { host, port, env } from 'c0nfig';
import mountClient from './mountClient';

const app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../../layouts'));
app.use(logger('tiny'));
app.use(cookieParser());
app.use(compression());
app.use(serveFavicon(path.join(__dirname, '../../public/assets/favicon.png')));
app.use(express.static(path.join(__dirname, '../../public')));

app.use(mountClient());

http.createServer(app).listen(port, () => {
    console.log(`Universal React + Flux boilerplate app is listening on http://${host}:${port} env=${env}`);
});
