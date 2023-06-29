import { Handler } from 'express';
import { HTTPStatuses } from '../../routes/routes.models';
import { ReportDataDatabase } from './report-data.db';

export function validateReportDataIdFactory(): Handler {
  return async function (request, response, next) {
    if (!request.params.dataId) {
      response
        .status(HTTPStatuses.BAD_REQUEST)
        .send({ error: 'Report Data Id is required!' })
        .end();
    } else {
      next();
    }
  };
}

export function validateReportDataFactory(
  reportDataDb: ReportDataDatabase
): Handler {
  return async function (request, response, next) {
    if (!(await reportDataDb.getReportData(request.params.dataId))) {
      response
        .status(HTTPStatuses.NOT_FOUND)
        .send({ error: 'Report Data Not Found!' })
        .end();
    } else {
      next();
    }
  };
}

export function getAllReportDataFactory(
  reportDataDb: ReportDataDatabase
): Handler {
  return async function (_, response) {
    response
      .status(HTTPStatuses.OK)
      .send(await reportDataDb.getAllReportData())
      .end();
  };
}

export function getReportDataByReportIdFactory(
  reportDataDb: ReportDataDatabase
): Handler {
  return async function (request, response) {
    response
      .status(HTTPStatuses.OK)
      .send(await reportDataDb.getReportDataByReportId(request.params.reportId))
      .end();
  };
}

export function addReportDataFactory(
  reportDataDb: ReportDataDatabase
): Handler {
  return async function (request, response) {
    response
      .status(HTTPStatuses.CREATED)
      .send(await reportDataDb.addReportData(request.params.reportId))
      .end();
  };
}

export function deleteReportDataFactory(
  reportDataDb: ReportDataDatabase
): Handler {
  return async (request, response) => {
    reportDataDb.deleteReportData(request.params.dataId);

    response
      .status(HTTPStatuses.DELETED)
      .send({ message: 'Report Data deleted!' })
      .end();
  };
}
