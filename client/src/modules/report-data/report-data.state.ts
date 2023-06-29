import { ReportData } from './report-data.model';

export interface ReportDataState {
  reportData: ReportData[];
  isLoadingReportData: boolean;
}

export interface WithReportDataState {
  reportDataState: ReportDataState;
}
