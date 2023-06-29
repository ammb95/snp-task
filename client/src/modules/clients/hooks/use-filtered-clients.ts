import { useMemo } from 'react';
import { useSearchState } from '../../search/hooks/use-search-state';
import { Client } from '../client.model';
import { useClientsState } from './use-clients-state';

export const useFilteredClients = (): Client[] => {
  const {
    clientsState: { clients }
  } = useClientsState();
  const {
    searchState: { filter }
  } = useSearchState();

  const filteredClients = useMemo(
    () =>
      clients?.filter(client =>
        client.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [clients, filter]
  );

  return filteredClients;
};
