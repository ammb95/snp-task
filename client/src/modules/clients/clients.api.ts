import { Client } from './client.model';

export interface ClientsAPI {
  clients: Client[];
  isLoadingClients: boolean;
  isFetchingClients: boolean;
  addClient: any;
  deleteClient: any;
  refetchClients: any;
}

export interface WithClientsAPI {
  clientsApi: ClientsAPI;
}
