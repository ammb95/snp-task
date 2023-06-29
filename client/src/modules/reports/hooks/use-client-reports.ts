import { useMemo } from 'react';
import { Report } from '../report.model';
import { useReportsState } from './use-reports-state';

export const useClientReports = (clientId: string): Report[] => {
  const {
    reportsState: { reports: allReports }
  } = useReportsState();

  const reports = useMemo(
    () => allReports?.filter(report => report.clientId === clientId),
    [allReports, clientId]
  );

  return reports;
};
