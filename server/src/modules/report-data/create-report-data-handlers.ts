import { AppBaseRoutes, AppRouteParams } from '../../routes/routes.constants';
import { HTTPMethods, RouteHandler } from '../../routes/routes.models';
import { ReportsDatabase } from '../reports/reports.db';
import {
  validateReportFactory,
  validateReportIdFactory
} from '../reports/reports.handlers';
import { ReportDataDatabase } from './report-data.db';
import {
  addReportDataFactory,
  deleteReportDataFactory,
  getAllReportDataFactory,
  getReportDataByReportIdFactory,
  validateReportDataFactory,
  validateReportDataIdFactory
} from './report-data.handlers';

export function createReportDataHandlers(
  reportDataDb: ReportDataDatabase,
  reportsDb: ReportsDatabase
): RouteHandler[] {
  const validateReportId = validateReportIdFactory();
  const validateReport = validateReportFactory(reportsDb);

  const validateReportDataId = validateReportDataIdFactory();
  const validateReportData = validateReportDataFactory(reportDataDb);

  return [
    {
      method: HTTPMethods.GET,
      path: '/',
      callbacks: [getAllReportDataFactory(reportDataDb)]
    },
    {
      method: HTTPMethods.GET,
      path: `${AppBaseRoutes.REPORTS_BASEPATH}/:${AppRouteParams.REPORT_ID}`,
      callbacks: [
        validateReportId,
        validateReport,
        getReportDataByReportIdFactory(reportDataDb)
      ]
    },
    {
      method: HTTPMethods.POST,
      path: `/:${AppRouteParams.REPORT_ID}`,
      callbacks: [
        validateReportId,
        validateReport,
        addReportDataFactory(reportDataDb)
      ]
    },
    {
      method: HTTPMethods.DELETE,
      path: `/:${AppRouteParams.DATA_ID}`,
      callbacks: [
        validateReportDataId,
        validateReportData,
        deleteReportDataFactory(reportDataDb)
      ]
    }
  ];
}
