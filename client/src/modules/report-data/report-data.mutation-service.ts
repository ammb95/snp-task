import { MouseEventHandler } from 'react';

export interface ReportDataMutationService {
  handleCreateReportData: (
    reportId: string
  ) => MouseEventHandler<HTMLButtonElement>;
  handleDeleteReportData: (
    dataId: string
  ) => MouseEventHandler<HTMLButtonElement>;
}

export interface WithReportDataMutationService {
  reportDataMutationService: ReportDataMutationService;
}
