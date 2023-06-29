import { useAppMutationServices } from '../../../hooks/use-app-mutation-services';
import { WithSearchMutationService } from '../search.mutation-service';

export const useSearchMutationService = (): WithSearchMutationService => {
  const { searchMutationService } = useAppMutationServices();
  return { searchMutationService };
};
