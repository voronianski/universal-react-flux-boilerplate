/**
 * Create Flux instance per request
 */

import Flux from '../../shared/flux';

export default function (req, res, next) {
    if (!req.flux || !(req.flux instanceof Flux)) {
        req.flux = new Flux();
    }
    next();
}
