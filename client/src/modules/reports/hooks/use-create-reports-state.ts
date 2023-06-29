import { useMemo } from 'react';
import { WithReportsAPI } from '../reports.api';
import { WithReportsState } from '../reports.state';

export const useCreateReportsState = ({
  reportsApi
}: WithReportsAPI): WithReportsState => {
  const reports = reportsApi.reports;

  const isLoadingReports = useMemo(
    () => reportsApi?.isLoadingReports || reportsApi?.isFetchingReports,
    [reportsApi]
  );

  return {
    reportsState: {
      reports,
      isLoadingReports
    }
  };
};
