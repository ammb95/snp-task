import { AppAPI } from '../app.api';
import { AppMutationService } from '../app.mutation-service';
import { useCreateClientsMutationService } from '../modules/clients/hooks/use-create-clients-mutation-service';
import { useCreateReportsMutationService } from '../modules/reports/hooks/use-create-reports-mutation-service';
import { useCreateReportDataMutationService } from '../modules/report-data/hooks/use-create-report-data-mutation-service';
import { useCreateSearchMutationService } from '../modules/search/hooks/use-create-search-mutation-service';

export const useCreateAppMutationService = ({
  clientsApi,
  reportsApi,
  reportDataApi
}: AppAPI): AppMutationService => {
  const { clientsMutationService } = useCreateClientsMutationService({
    clientsApi
  });
  const { reportsMutationService } = useCreateReportsMutationService({
    reportsApi
  });
  const { reportDataMutationService } = useCreateReportDataMutationService({
    reportDataApi
  });
  const { searchMutationService } = useCreateSearchMutationService();

  return {
    clientsMutationService,
    reportsMutationService,
    reportDataMutationService,
    searchMutationService
  };
};
