import { useAppMutationServices } from '../../../hooks/use-app-mutation-services';
import { WithReportDataMutationService } from '../report-data.mutation-service';

export const useReportDataMutationService =
  (): WithReportDataMutationService => {
    const { reportDataMutationService } = useAppMutationServices();
    return { reportDataMutationService };
  };
