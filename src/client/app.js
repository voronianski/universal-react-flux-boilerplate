// polyfills
import 'Base64';
import 'es5-shim';
import 'es5-shim/es5-sham';

import React from 'react';
window.React = React;

import router from './router';
import Flux from '../shared/flux';
import performRouteHandlerStaticMethod from '../shared/common/utils/performRouteHandlerStaticMethod';

const flux = new Flux();
flux.deserialize(decodeURIComponent(window.escape(atob(window.__snapshot__))));

router.run(async (Handler, state) => {
    await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', { flux });

    React.render(
        React.createElement(Handler, { flux }),
        document.getElementById('app')
    );
});
