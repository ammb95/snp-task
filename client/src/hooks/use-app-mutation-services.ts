import { AppMutationService } from '../app.mutation-service';
import { useAppContext } from './use-app-context';

export const useAppMutationServices = (): AppMutationService => {
  const { mutationService } = useAppContext();
  return mutationService as AppMutationService;
};
