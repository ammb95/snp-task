import { AppRouteParams } from '../../routes/routes.constants';
import { HTTPMethods, RouteHandler } from '../../routes/routes.models';
import { ReportsDatabase } from '../reports/reports.db';
import { ClientsDatabase } from './clients.db';
import {
  addClientFactory,
  deleteClientFactory,
  getAllClientsFactory,
  getClientFactory,
  validateClientFactory,
  validateClientIdFactory
} from './clients.handlers';

export function createClientsHandlers(
  clientsDb: ClientsDatabase,
  reportsDb: ReportsDatabase
): RouteHandler[] {
  const validateClientId = validateClientIdFactory();
  const validateClient = validateClientFactory(clientsDb);
  return [
    {
      method: HTTPMethods.GET,
      path: '/',
      callbacks: [getAllClientsFactory(clientsDb)]
    },
    {
      method: HTTPMethods.GET,
      path: `/:${AppRouteParams.CLIENT_ID}`,
      callbacks: [validateClientId, validateClient, getClientFactory(clientsDb)]
    },
    {
      method: HTTPMethods.POST,
      path: '/',
      callbacks: [addClientFactory(clientsDb)]
    },
    {
      method: HTTPMethods.DELETE,
      path: `/:${AppRouteParams.CLIENT_ID}`,
      callbacks: [
        validateClientId,
        validateClient,
        deleteClientFactory(clientsDb, reportsDb)
      ]
    }
  ];
}
