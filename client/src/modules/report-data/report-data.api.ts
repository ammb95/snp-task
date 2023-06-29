import { ReportData } from './report-data.model';

export interface ReportDataAPI {
  reportData: ReportData[];
  isLoadingReportData: boolean;
  isFetchingReportData: boolean;
  addReportData: any;
  deleteReportData: any;
  refetchReportData: any;
}

export interface WithReportDataAPI {
  reportDataApi: ReportDataAPI;
}
