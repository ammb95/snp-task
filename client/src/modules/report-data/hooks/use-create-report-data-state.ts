import { useMemo } from 'react';
import { WithReportDataAPI } from '../report-data.api';
import { WithReportDataState } from '../report-data.state';

export const useCreateReportDataState = ({
  reportDataApi
}: WithReportDataAPI): WithReportDataState => {
  const reportData = reportDataApi.reportData;

  const isLoadingReportData = useMemo(
    () =>
      reportDataApi?.isLoadingReportData || reportDataApi?.isFetchingReportData,
    [reportDataApi]
  );

  return {
    reportDataState: {
      reportData,
      isLoadingReportData
    }
  };
};
