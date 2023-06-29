import { Handler } from 'express';

export enum HTTPMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete'
}

export enum HTTPStatuses {
  OK = 200,
  CREATED = 201,
  DELETED = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export interface RouteHandler {
  path: string;
  method: HTTPMethods;
  callbacks: Handler[];
}
