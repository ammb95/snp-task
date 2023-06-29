import { faker } from '@faker-js/faker';
import { Client } from './clients.model';
import { DEFAULT_INITIAL_NUMBER_OF_CLIENTS } from './clients.constants';

export function createClient(): Client {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName()
  };
}

export function generateClients(
  numberOfClients = DEFAULT_INITIAL_NUMBER_OF_CLIENTS
): Client[] {
  return new Array(numberOfClients).fill(null).map(() => createClient());
}
