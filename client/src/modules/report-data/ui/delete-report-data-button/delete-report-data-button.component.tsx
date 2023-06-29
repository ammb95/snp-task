import { FunctionComponent } from 'react';
import { IconButton } from '../../../../components/icon-button/icon-button.component';
import { useReportDataMutationService } from '../../hooks/use-report-data-mutation-service';

export interface DeleteReportDataButtonProps {
  dataId: string;
}

export const DeleteReportDataButton: FunctionComponent<
  DeleteReportDataButtonProps
> = ({ dataId }) => {
  const { reportDataMutationService } = useReportDataMutationService();
  return (
    <IconButton
      onClick={reportDataMutationService.handleDeleteReportData(dataId)}
      icon={'X'}
    />
  );
};
