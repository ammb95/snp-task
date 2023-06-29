import { useAppState } from '../../../hooks/use-app-state';
import { WithReportsState } from '../reports.state';

export const useReportsState = (): WithReportsState => {
  const { reportsState } = useAppState();
  return { reportsState };
};
