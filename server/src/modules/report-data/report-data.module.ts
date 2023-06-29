import express from 'express';
import { registerRouterHandlers } from '../../utils/register-router-handlers';
import { ReportDataDatabase } from './report-data.db';
import { createReportDataHandlers } from './create-report-data-handlers';
import { ReportsDatabase } from '../reports/reports.db';

export function initReportDataModule(
  reportDataDb: ReportDataDatabase,
  reportsDb: ReportsDatabase
) {
  const module = express.Router();
  const handlers = createReportDataHandlers(reportDataDb, reportsDb);

  registerRouterHandlers({ router: module, handlers });

  return module;
}
