import { WithClientsState } from './modules/clients/clients.state';
import { WithReportsState } from './modules/reports/reports.state';
import { WithReportDataState } from './modules/report-data/report-data.state';
import { WithSearchState } from './modules/search/search.state';

export interface AppState
  extends WithClientsState,
    WithReportsState,
    WithReportDataState,
    WithSearchState {}
