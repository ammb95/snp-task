import { AppAPI } from '../app.api';
import { AppState } from '../app.state';
import { useCreateSearchState } from '../modules/search/hooks/use-create-search-state';
import { useCreateClientsState } from '../modules/clients/hooks/use-create-clients-state';
import { useCreateReportsState } from '../modules/reports/hooks/use-create-reports-state';
import { useCreateReportDataState } from '../modules/report-data/hooks/use-create-report-data-state';

export const useCreateAppState = ({
  reportDataApi,
  reportsApi,
  clientsApi
}: AppAPI): AppState => {
  const { clientsState } = useCreateClientsState({ clientsApi });
  const { reportsState } = useCreateReportsState({ reportsApi });
  const { reportDataState } = useCreateReportDataState({ reportDataApi });
  const { searchState } = useCreateSearchState();

  return {
    clientsState,
    reportsState,
    reportDataState,
    searchState
  };
};
