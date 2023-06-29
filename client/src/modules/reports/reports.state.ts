import { Report } from './report.model';

export interface ReportsState {
  reports: Report[];
  isLoadingReports: boolean;
}

export interface WithReportsState {
  reportsState: ReportsState;
}
