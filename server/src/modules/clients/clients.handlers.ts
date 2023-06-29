import { Handler } from 'express';
import { ClientsDatabase } from './clients.db';
import { HTTPStatuses } from '../../routes/routes.models';
import { ReportsDatabase } from '../reports/reports.db';

export function validateClientIdFactory(): Handler {
  return async function (request, response, next) {
    if (!request.params.clientId) {
      response
        .status(HTTPStatuses.BAD_REQUEST)
        .send({ error: 'Client Id is required!' })
        .end();
    } else {
      next();
    }
  };
}

export function validateClientFactory(clientsDb: ClientsDatabase): Handler {
  return async function (request, response, next) {
    if (!(await clientsDb.getClient(request.params.clientId))) {
      response
        .status(HTTPStatuses.NOT_FOUND)
        .send({ error: 'Client Not Found!' })
        .end();
    } else {
      next();
    }
  };
}

export function getAllClientsFactory(clientsDb: ClientsDatabase): Handler {
  return async function (_, response) {
    response.status(HTTPStatuses.OK).send(await clientsDb.getClients());
  };
}

export function getClientFactory(clientsDb: ClientsDatabase): Handler {
  return async function (request, response) {
    response
      .status(HTTPStatuses.OK)
      .send(await clientsDb.getClient(request.params.clientId))
      .end();
  };
}

export function addClientFactory(clientsDb: ClientsDatabase): Handler {
  return async function (_, response) {
    response
      .status(HTTPStatuses.CREATED)
      .send(await clientsDb.addClient())
      .end();
  };
}

export function deleteClientFactory(
  clientsDb: ClientsDatabase,
  reportsDb: ReportsDatabase
): Handler {
  return async (request, response) => {
    clientsDb.deleteClient(request.params.clientId);
    reportsDb.deleteReportByClientId(request.params.clientId);
    response
      .status(HTTPStatuses.DELETED)
      .send({ message: 'Client deleted!' })
      .end();
  };
}
