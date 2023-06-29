import { MouseEventHandler } from 'react';

export interface ReportsMutationService {
  handleCreateReport: (
    clientId: string
  ) => MouseEventHandler<HTMLButtonElement>;
  handleDeleteReport: (
    reportId: string
  ) => MouseEventHandler<HTMLButtonElement>;
}

export interface WithReportsMutationService {
  reportsMutationService: ReportsMutationService;
}
