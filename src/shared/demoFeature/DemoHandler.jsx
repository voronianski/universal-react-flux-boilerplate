import React from 'react';
import FluxComponent from 'flummox/component';

import DemoList from './components/DemoList';

class DemoHandler extends React.Component {
    static async routerWillRun({ flux }) {
        const demoActions = flux.getActions('demo');
        return await demoActions.requestItems();
    }

    render() {
        const { flux } = this.props;
        return (
            <FluxComponent flux={flux} connectToStores={['demo']}>
                <h2>Demo Feature</h2>
                <DemoList />
            </FluxComponent>
        );
    }
}

DemoHandler.contextTypes = {
    router: React.PropTypes.func
};

export default DemoHandler;
