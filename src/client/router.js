import ReactRouter from 'react-router';
import routes from '../shared/routes.jsx';

export default ReactRouter.create({
    routes: routes,
    location: ReactRouter.HistoryLocation
});
