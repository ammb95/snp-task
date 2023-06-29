import { useAppMutationServices } from '../../../hooks/use-app-mutation-services';
import { WithClientsMutationService } from '../clients.mutation-service';

export const useClientsMutationService = (): WithClientsMutationService => {
  const { clientsMutationService } = useAppMutationServices();
  return { clientsMutationService };
};
