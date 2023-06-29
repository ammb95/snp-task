import { FunctionComponent } from 'react';
import { useReportDataMutationService } from '../../hooks/use-report-data-mutation-service';

export interface CreateReportDataButtonProps {
  reportId: string;
}

export const CreateReportDataButton: FunctionComponent<
  CreateReportDataButtonProps
> = ({ reportId }) => {
  const { reportDataMutationService } = useReportDataMutationService();
  return (
    <button
      type='button'
      onClick={reportDataMutationService.handleCreateReportData(reportId)}
    >
      Add data
    </button>
  );
};
