import { MouseEventHandler, useCallback } from 'react';
import { WithReportsAPI } from '../reports.api';
import { WithReportsMutationService } from '../reports.mutation-service';

export const useCreateReportsMutationService = ({
  reportsApi
}: WithReportsAPI): WithReportsMutationService => {
  const handleCreateReport = useCallback(
    (clientId: string): MouseEventHandler<HTMLButtonElement> =>
      async () => {
        const newReport = await reportsApi?.addReport(clientId);
        if (newReport) {
          await reportsApi?.refetchReports();
        }
      },
    [reportsApi]
  );
  const handleDeleteReport = useCallback(
    (reportId: string): MouseEventHandler<HTMLButtonElement> =>
      async () => {
        await reportsApi?.deleteReport(reportId);
        await reportsApi?.refetchReports();
      },
    [reportsApi]
  );

  return {
    reportsMutationService: {
      handleCreateReport,
      handleDeleteReport
    }
  };
};
