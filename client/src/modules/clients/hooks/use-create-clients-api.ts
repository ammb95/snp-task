import { useMemo } from 'react';
import {
  useAddClientMutation,
  useDeleteClientMutation,
  useGetClientsQuery
} from '../../../api/api';
import { ClientsAPI, WithClientsAPI } from '../clients.api';

export const useCreateClientsAPI = (): WithClientsAPI => {
  const {
    data: clients = [],
    refetch: refetchClients,
    isLoading: isLoadingClients,
    isFetching: isFetchingClients
  } = useGetClientsQuery();
  const [addClient] = useAddClientMutation();
  const [deleteClient] = useDeleteClientMutation();

  const clientsApi: ClientsAPI = useMemo(
    () => ({
      clients,
      isLoadingClients,
      isFetchingClients,
      addClient,
      deleteClient,
      refetchClients
    }),
    [
      clients,
      isLoadingClients,
      isFetchingClients,
      addClient,
      deleteClient,
      refetchClients
    ]
  );

  return { clientsApi };
};
