import { useMemo } from 'react';
import {
  useAddReportMutation,
  useDeleteReportMutation,
  useGetReportsQuery
} from '../../../api/api';
import { ReportsAPI, WithReportsAPI } from '../reports.api';

export const useCreateReportsAPI = (): WithReportsAPI => {
  const {
    data: reports = [],
    refetch: refetchReports,
    isLoading: isLoadingReports,
    isFetching: isFetchingReports
  } = useGetReportsQuery();
  const [addReport] = useAddReportMutation();
  const [deleteReport] = useDeleteReportMutation();

  const reportsApi: ReportsAPI = useMemo(
    () => ({
      reports,
      isLoadingReports,
      isFetchingReports,
      addReport,
      deleteReport,
      refetchReports
    }),
    [
      reports,
      isLoadingReports,
      isFetchingReports,
      addReport,
      deleteReport,
      refetchReports
    ]
  );

  return { reportsApi };
};
