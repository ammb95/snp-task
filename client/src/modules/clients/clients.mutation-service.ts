import { MouseEventHandler } from 'react';

export interface ClientsMutationService {
  handleCreateClient: MouseEventHandler<HTMLButtonElement>;
  handleDeleteClient: (
    clientId: string
  ) => MouseEventHandler<HTMLButtonElement>;
}

export interface WithClientsMutationService {
  clientsMutationService: ClientsMutationService;
}
