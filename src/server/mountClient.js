import express from 'express';

import { env } from 'c0nfig';
import * as layout from './middleware/layout';
import createFluxPerRequest from './middleware/flux';

export default function () {
    const client = express.Router();

    client.use(createFluxPerRequest);

    if ('production' === env || 'staging' === env) {
        client.use(layout.production());
    } else {
        client.use(layout.development());
    }

    return client;
}
