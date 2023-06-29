import { AppAPI } from '../app.api';
import { useCreateClientsAPI } from '../modules/clients/hooks/use-create-clients-api';
import { useCreateReportsAPI } from '../modules/reports/hooks/use-create-reports-api';
import { useCreateReportDataAPI } from '../modules/report-data/hooks/use-create-report-data-api';

export const useAppAPI = (): AppAPI => {
  const { clientsApi } = useCreateClientsAPI();
  const { reportsApi } = useCreateReportsAPI();
  const { reportDataApi } = useCreateReportDataAPI();

  return {
    clientsApi,
    reportsApi,
    reportDataApi
  };
};
