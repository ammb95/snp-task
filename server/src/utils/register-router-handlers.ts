import { Router } from 'express';
import { RouteHandler } from '../routes/routes.models';

export interface RegisterRouterHandlersDeps {
  handlers: RouteHandler[];
  router: Router;
}

export function registerRouterHandlers({
  router,
  handlers
}: RegisterRouterHandlersDeps) {
  handlers.forEach(({ method, path, callbacks }) => {
    router[method](path, ...callbacks);
  });
}
