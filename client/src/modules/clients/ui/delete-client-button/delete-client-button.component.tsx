import { FunctionComponent } from 'react';
import { IconButton } from '../../../../components/icon-button/icon-button.component';
import { useClientsMutationService } from '../../hooks/use-clients-mutation-service';

export interface DeleteClientButtonProps {
  clientId: string;
}

export const DeleteClientButton: FunctionComponent<DeleteClientButtonProps> = ({
  clientId
}) => {
  const { clientsMutationService } = useClientsMutationService();
  return (
    <IconButton
      onClick={clientsMutationService?.handleDeleteClient(clientId)}
      icon={'X'}
    />
  );
};
