import { useAppState } from '../../../hooks/use-app-state';
import { WithReportDataState } from '../report-data.state';

export const useReportDataState = (): WithReportDataState => {
  const { reportDataState } = useAppState();
  return { reportDataState };
};
