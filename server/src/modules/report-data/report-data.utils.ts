import { faker } from '@faker-js/faker';
import {
  DEFAULT_REPORT_DATA_LENGTH,
  MAX_DATA_VALUE
} from './report-data.constants';
import { ReportData } from './report-data.model';

function getRandomNumber(): number {
  return Math.floor(MAX_DATA_VALUE * Math.random());
}

function generateRandomValues(): number[] {
  return new Array(DEFAULT_REPORT_DATA_LENGTH)
    .fill(null)
    .map(() => getRandomNumber());
}

export function createReportData(reportId: string): ReportData {
  return {
    id: faker.string.uuid(),
    reportId,
    values: generateRandomValues()
  };
}
