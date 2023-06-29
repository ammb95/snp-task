import { FunctionComponent } from 'react';
import { DataBoundary } from '../../components/data-boundary/data-boundary.component';
import { ClientComponent } from './ui/client/client.component';
import { useFilteredClients } from './hooks/use-filtered-clients';
import { useClientsState } from './hooks/use-clients-state';
import styles from './clients.module.scss';

export const Clients: FunctionComponent = () => {
  const {
    clientsState: { clients, isLoadingClients }
  } = useClientsState();
  const filteredClients = useFilteredClients();

  return (
    <div className={styles['clients-wrapper']}>
      <DataBoundary
        message='No Clients to Show'
        data={clients}
        isLoading={isLoadingClients}
      >
        {filteredClients?.map(client => (
          <ClientComponent key={client.id} client={client} />
        ))}
      </DataBoundary>
    </div>
  );
};
