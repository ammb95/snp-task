import express from 'express';
import { registerRouterHandlers } from '../../utils/register-router-handlers';
import { createReportHandlers } from './create-reports-handlers';
import { ReportsDatabase } from './reports.db';
import { ClientsDatabase } from '../clients/clients.db';
import { ReportDataDatabase } from '../report-data/report-data.db';

export function initReportsModule(
  reportsDb: ReportsDatabase,
  clientsDb: ClientsDatabase,
  reportDataDb: ReportDataDatabase
) {
  const module = express.Router();
  const handlers = createReportHandlers(reportsDb, clientsDb, reportDataDb);

  registerRouterHandlers({ router: module, handlers });

  return module;
}
