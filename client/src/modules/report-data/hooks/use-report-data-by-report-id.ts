import { useMemo } from 'react';
import { useReportDataState } from './use-report-data-state';
import { ReportData } from '../report-data.model';

export const useReportDataByReportId = (reportId: string): ReportData[] => {
  const {
    reportDataState: { reportData: allReportData }
  } = useReportDataState();

  const reportData = useMemo(
    () => allReportData.filter(d => d.reportId === reportId),
    [allReportData, reportId]
  );

  return reportData;
};
