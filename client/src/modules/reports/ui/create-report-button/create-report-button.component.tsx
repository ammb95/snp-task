import { FunctionComponent } from 'react';
import { useReportsMutationService } from '../../hooks/use-reports-mutation-service';

export interface CreateClientButtonProps {
  clientId: string;
}

export const CreateReportButton: FunctionComponent<CreateClientButtonProps> = ({
  clientId
}) => {
  const { reportsMutationService } = useReportsMutationService();
  return (
    <button
      type='button'
      onClick={reportsMutationService.handleCreateReport(clientId)}
    >
      Add report
    </button>
  );
};
