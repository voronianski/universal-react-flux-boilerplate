// polyfills
import 'Base64';
import 'es5-shim';
import 'es5-shim/es5-sham';

import React from 'react';
window.React = React;

import router from './router';
import Flux from '../shared/flux';

const flux = new Flux();
flux.deserialize(decodeURIComponent(window.escape(atob(window.__snapshot__))));

router.run(Handler => {
    React.render(
        React.createElement(Handler, { flux }),
        document.getElementById('app')
    );
});
