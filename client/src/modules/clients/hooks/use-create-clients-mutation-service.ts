import { MouseEventHandler, useCallback } from 'react';
import { WithClientsAPI } from '../clients.api';
import { WithClientsMutationService } from '../clients.mutation-service';

export const useCreateClientsMutationService = ({
  clientsApi
}: WithClientsAPI): WithClientsMutationService => {
  const handleCreateClient: MouseEventHandler<HTMLButtonElement> =
    useCallback(async () => {
      const newClient = await clientsApi?.addClient();
      if (newClient) {
        await clientsApi?.refetchClients();
      }
    }, [clientsApi]);

  const handleDeleteClient = useCallback(
    (clientId: string): MouseEventHandler<HTMLButtonElement> =>
      async () => {
        await clientsApi?.deleteClient(clientId);
        await clientsApi?.refetchClients();
      },
    [clientsApi]
  );

  return {
    clientsMutationService: {
      handleCreateClient,
      handleDeleteClient
    }
  };
};
