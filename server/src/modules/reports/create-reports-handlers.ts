import { AppRouteParams } from '../../routes/routes.constants';
import { HTTPMethods, RouteHandler } from '../../routes/routes.models';
import { ClientsDatabase } from '../clients/clients.db';
import {
  validateClientFactory,
  validateClientIdFactory
} from '../clients/clients.handlers';
import { ReportDataDatabase } from '../report-data/report-data.db';
import { ReportsDatabase } from './reports.db';
import {
  addReportFactory,
  deleteReportFactory,
  getReportsByClientIdFactory,
  getAllReportsFactory,
  validateReportFactory,
  validateReportIdFactory
} from './reports.handlers';

export function createReportHandlers(
  reportsDb: ReportsDatabase,
  clientsDb: ClientsDatabase,
  reportDataDb: ReportDataDatabase
): RouteHandler[] {
  const validateClientId = validateClientIdFactory();
  const validateClient = validateClientFactory(clientsDb);
  const validateReportId = validateReportIdFactory();
  const validateReport = validateReportFactory(reportsDb);
  return [
    {
      method: HTTPMethods.GET,
      path: '/',
      callbacks: [getAllReportsFactory(reportsDb)]
    },
    {
      method: HTTPMethods.GET,
      path: `/:${AppRouteParams.CLIENT_ID}`,
      callbacks: [
        validateClientId,
        validateClient,
        getReportsByClientIdFactory(reportsDb)
      ]
    },
    {
      method: HTTPMethods.POST,
      path: `/:${AppRouteParams.CLIENT_ID}`,
      callbacks: [validateClientId, validateClient, addReportFactory(reportsDb)]
    },
    {
      method: HTTPMethods.DELETE,
      path: `/:${AppRouteParams.REPORT_ID}`,
      callbacks: [
        validateReportId,
        validateReport,
        deleteReportFactory(reportDataDb, reportsDb)
      ]
    }
  ];
}
