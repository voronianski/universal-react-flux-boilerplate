import React from 'react';
import { RouteHandler } from 'react-router';

class AppHandler extends React.Component {
    render() {
        return (
            <div>
                 <RouteHandler {...this.props} />
            </div>
        );
    }
}

AppHandler.contextTypes = {
    router: React.PropTypes.func
};

export default AppHandler;
