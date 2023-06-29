import { useAppState } from '../../../hooks/use-app-state';
import { WithClientsState } from '../clients.state';

export const useClientsState = (): WithClientsState => {
  const { clientsState } = useAppState();
  return { clientsState };
};
