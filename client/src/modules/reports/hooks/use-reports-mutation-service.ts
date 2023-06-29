import { useAppMutationServices } from '../../../hooks/use-app-mutation-services';
import { WithReportsMutationService } from '../reports.mutation-service';

export const useReportsMutationService = (): WithReportsMutationService => {
  const { reportsMutationService } = useAppMutationServices();
  return { reportsMutationService };
};
