import express from 'express';
import { ClientsDatabase } from './clients.db';
import { createClientsHandlers } from './create-clients-handlers';
import { registerRouterHandlers } from '../../utils/register-router-handlers';
import { ReportsDatabase } from '../reports/reports.db';

export function initClientsModule(
  clientsDb: ClientsDatabase,
  reportsDb: ReportsDatabase
) {
  const module = express.Router();
  const handlers = createClientsHandlers(clientsDb, reportsDb);

  registerRouterHandlers({ router: module, handlers });

  return module;
}
