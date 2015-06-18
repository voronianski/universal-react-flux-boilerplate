import { Actions } from 'flummox';
import { getDemoItems } from './utils/demoAPIUtils';

class DemoActions extends Actions {
    async requestItems() {
        const items = await getDemoItems();
        return items;
    }
}

export default DemoActions;
