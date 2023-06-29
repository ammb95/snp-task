import { WithClientsAPI } from './modules/clients/clients.api';
import { WithReportDataAPI } from './modules/report-data/report-data.api';
import { WithReportsAPI } from './modules/reports/reports.api';

export interface AppAPI
  extends WithClientsAPI,
    WithReportsAPI,
    WithReportDataAPI {}
