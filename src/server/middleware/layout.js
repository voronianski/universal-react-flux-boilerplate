/**
 * Serve HTML layout with pre-rendered React views
 */

import { env, hotReloadUrl } from 'c0nfig';
import React from 'react';
import ReactRouter from 'react-router';
import versionifyAssets from 'versionify-assets';

// map client routes to server
import routes from '../../shared/routes';
import performRouteHandlerStaticMethod from '../../shared/common/utils/performRouteHandlerStaticMethod';

function handler (title, mainJS, mainCSS) {
    return (req, res) => {
        title = req.title || title;

        const flux = req.flux;

        ReactRouter.run(routes, req.url, renderReactComponents);

        function renderReactComponents (Handler, state) {
            performRouteHandlerStaticMethod(state.routes, 'routerWillRun', { flux }).then(() => {
                const element = React.createElement(Handler, { flux });
                const appString = React.renderToString(element);
                const snapshot = new Buffer(flux.serialize(), 'utf-8').toString('base64');

                res.render('base', { mainJS, mainCSS, env, title, snapshot, appString });
            });
        }
    };
}

export function development () {
    return handler(
        'React Flux Boilerplate | Dev',
        `${hotReloadUrl}app.js`
    );
}

export function production () {
    return handler(
        'React Flux Boilerplate',
        versionifyAssets('/build/app.min.js')
    );
}
