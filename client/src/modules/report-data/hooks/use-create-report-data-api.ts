import { useMemo } from 'react';
import { ReportDataAPI, WithReportDataAPI } from '../report-data.api';
import {
  useAddReportDataMutation,
  useDeleteReportDataMutation,
  useGetReportDataQuery
} from '../../../api/api';

export const useCreateReportDataAPI = (): WithReportDataAPI => {
  const {
    data: reportData = [],
    refetch: refetchReportData,
    isLoading: isLoadingReportData,
    isFetching: isFetchingReportData
  } = useGetReportDataQuery();
  const [addReportData] = useAddReportDataMutation();
  const [deleteReportData] = useDeleteReportDataMutation();

  const reportDataApi: ReportDataAPI = useMemo(
    () => ({
      reportData,
      isLoadingReportData,
      isFetchingReportData,
      addReportData,
      deleteReportData,
      refetchReportData
    }),
    [
      reportData,
      isLoadingReportData,
      isFetchingReportData,
      addReportData,
      deleteReportData,
      refetchReportData
    ]
  );

  return { reportDataApi };
};
