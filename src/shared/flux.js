import { Flummox } from 'flummox';

import DemoActions from './demoFeature/DemoActions';
import DemoStore from './demoFeature/DemoStore';

class Flux extends Flummox {
    constructor() {
        super();

        this.createActions('demo', DemoActions);
        this.createStore('demo', DemoStore, this);
    }
}

export default Flux;
