import { Client } from './client.model';

export interface ClientsState {
  clients: Client[];
  isLoadingClients: boolean;
}

export interface WithClientsState {
  clientsState: ClientsState;
}
