import { MouseEventHandler, useCallback } from 'react';
import { WithReportDataAPI } from '../report-data.api';
import { WithReportDataMutationService } from '../report-data.mutation-service';

export const useCreateReportDataMutationService = ({
  reportDataApi
}: WithReportDataAPI): WithReportDataMutationService => {
  const handleCreateReportData = useCallback(
    (reportId: string): MouseEventHandler<HTMLButtonElement> =>
      async () => {
        const newReportData = await reportDataApi?.addReportData(reportId);
        if (newReportData) {
          await reportDataApi?.refetchReportData();
        }
      },
    [reportDataApi]
  );

  const handleDeleteReportData = useCallback(
    (dataId: string): MouseEventHandler<HTMLButtonElement> =>
      async () => {
        await reportDataApi?.deleteReportData(dataId);
        await reportDataApi?.refetchReportData();
      },
    [reportDataApi]
  );
  return {
    reportDataMutationService: {
      handleCreateReportData,
      handleDeleteReportData
    }
  };
};
