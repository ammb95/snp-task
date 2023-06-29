import { FunctionComponent } from 'react';
import { IconButton } from '../../../../components/icon-button/icon-button.component';
import { useReportsMutationService } from '../../hooks/use-reports-mutation-service';

export interface DeleteReportButtonProps {
  reportId: string;
}

export const DeleteReportButton: FunctionComponent<DeleteReportButtonProps> = ({
  reportId
}) => {
  const { reportsMutationService } = useReportsMutationService();
  return (
    <IconButton
      onClick={reportsMutationService?.handleDeleteReport(reportId)}
      icon={'X'}
    />
  );
};
