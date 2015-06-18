import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import AppHandler from './common/AppHandler';
import DemoHandler from './demoFeature/DemoHandler';

export default (
    <Route name="app" path="/?" handler={AppHandler}>
        <Route name="demo" path="demo/?" handler={DemoHandler} />
        <DefaultRoute handler={DemoHandler} />
    </Route>
);
