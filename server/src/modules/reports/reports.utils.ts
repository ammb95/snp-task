import { faker } from '@faker-js/faker';
import { Report } from './reports.model';
import { DEFAULT_NUMBER_OF_REPORTS_PER_CLIENT } from './reports.constants';

export function createReport(clientId: string): Report {
  const id = faker.string.uuid();
  return {
    id,
    clientId
  };
}

export function generateReports(
  reportsPerClient = DEFAULT_NUMBER_OF_REPORTS_PER_CLIENT,
  clientId: string
): Report[] {
  return new Array(reportsPerClient)
    .fill(null)
    .map(() => createReport(clientId));
}
