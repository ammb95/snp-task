import { Handler } from 'express';
import { ReportsDatabase } from './reports.db';
import { HTTPStatuses } from '../../routes/routes.models';
import { ReportDataDatabase } from '../report-data/report-data.db';

export function validateReportIdFactory(): Handler {
  return async function (request, response, next) {
    if (!request.params.reportId) {
      response
        .status(HTTPStatuses.BAD_REQUEST)
        .send({ error: 'Report Id is required!' })
        .end();
    } else {
      next();
    }
  };
}

export function validateReportFactory(reportsDb: ReportsDatabase): Handler {
  return async function (request, response, next) {
    if (!(await reportsDb.getReport(request.params.reportId))) {
      response
        .status(HTTPStatuses.NOT_FOUND)
        .send({ error: 'Report Not Found!' })
        .end();
    } else {
      next();
    }
  };
}

export function getAllReportsFactory(reportsDb: ReportsDatabase): Handler {
  return async function (_, response) {
    response.status(HTTPStatuses.OK).send(await reportsDb.getReports());
  };
}

export function getReportsByClientIdFactory(
  reportsDb: ReportsDatabase
): Handler {
  return async function (request, response) {
    response
      .status(HTTPStatuses.OK)
      .send(await reportsDb.getReportsByClientId(request.params.clientId));
  };
}

export function addReportFactory(reportsDb: ReportsDatabase): Handler {
  return async function (request, response) {
    response
      .status(HTTPStatuses.CREATED)
      .send(await reportsDb.addReport(request.params.clientId))
      .end();
  };
}

export function deleteReportFactory(
  reportDataDb: ReportDataDatabase,
  reportsDb: ReportsDatabase
): Handler {
  return async (request, response) => {
    reportsDb.deleteReport(request.params.reportId);
    reportDataDb.getReportDataByReportId(request.params.reportId);
    response
      .status(HTTPStatuses.DELETED)
      .send({ message: 'Report deleted!' })
      .end();
  };
}
