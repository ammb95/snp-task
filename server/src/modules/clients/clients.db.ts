import { DEFAULT_INITIAL_NUMBER_OF_CLIENTS } from './clients.constants';
import { Client } from './clients.model';
import { createClient, generateClients } from './clients.utils';

export class ClientsDatabase {
  private clients: Client[];

  constructor(numberOfClients = DEFAULT_INITIAL_NUMBER_OF_CLIENTS) {
    this.clients = generateClients(numberOfClients);
  }

  getClients() {
    return Promise.resolve(this.clients);
  }

  getClient(id: string) {
    return Promise.resolve(this.clients.find(client => client.id === id));
  }

  addClient() {
    const newClient = createClient();
    this.clients = [...this.clients, newClient];
    return Promise.resolve(newClient);
  }

  deleteClient(id: string) {
    this.clients = this.clients.filter(client => client.id !== id);
  }
}
