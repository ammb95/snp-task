import { Report } from './report.model';

export interface ReportsAPI {
  reports: Report[];
  isLoadingReports: boolean;
  isFetchingReports: boolean;
  addReport: any;
  deleteReport: any;
  refetchReports: any;
}

export interface WithReportsAPI {
  reportsApi: ReportsAPI;
}
