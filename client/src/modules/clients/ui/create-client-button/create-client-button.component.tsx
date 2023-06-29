import { FunctionComponent } from 'react';
import { useClientsMutationService } from '../../hooks/use-clients-mutation-service';

export const CreateClientButton: FunctionComponent = () => {
  const { clientsMutationService } = useClientsMutationService();
  return (
    <button type='button' onClick={clientsMutationService.handleCreateClient}>
      New Client
    </button>
  );
};
