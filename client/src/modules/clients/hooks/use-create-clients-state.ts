import { useMemo } from 'react';
import { WithClientsState } from '../clients.state';
import { WithClientsAPI } from '../clients.api';

export const useCreateClientsState = ({
  clientsApi
}: WithClientsAPI): WithClientsState => {
  const isLoadingClients = useMemo(
    () => clientsApi.isLoadingClients || clientsApi.isFetchingClients,
    [clientsApi]
  );

  return {
    clientsState: {
      clients: clientsApi.clients,
      isLoadingClients
    }
  };
};
