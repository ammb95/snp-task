import { FunctionComponent, useMemo } from 'react';
import {
  ExpandableCard,
  ExpandableCardContentConfig,
  ExpandableCardTitleConfig
} from '../../../../components/expandable-card/expandable-card.component';
import { DataBoundary } from '../../../../components/data-boundary/data-boundary.component';
import { getReportTitleId } from '../../../../utils/get-report-title-id';
import { Report } from '../../report.model';
import { useReportDataState } from '../../../report-data/hooks/use-report-data-state';
import { CreateReportDataButton } from '../../../report-data/ui/create-report-data-button/create-report-data-button.component';
import { DeleteReportButton } from '../delete-report-button/delete-report-button.component';
import { ReportDataList } from '../../../report-data/report-data-list.component';

export interface ReportComponentProps {
  report: Report;
}

export const ReportComponent: FunctionComponent<ReportComponentProps> = ({
  report
}) => {
  const {
    reportDataState: { reportData: allReportData, isLoadingReportData }
  } = useReportDataState();

  const titleId = useMemo(() => getReportTitleId(report.id), [report.id]);
  const titleConfig: ExpandableCardTitleConfig = useMemo(
    () => ({ size: 20, text: `Report #${titleId}` }),
    [titleId]
  );
  const contentConfig: ExpandableCardContentConfig = {
    minHeight: 210,
    maxHeight: 210
  };

  return (
    <ExpandableCard
      titleConfig={titleConfig}
      contentConfig={contentConfig}
      leftSlot={
        <>
          <CreateReportDataButton reportId={report.id} />
          <DeleteReportButton reportId={report.id} />
        </>
      }
    >
      <DataBoundary
        message='Report has no data!'
        data={allReportData}
        isLoading={isLoadingReportData}
      >
        <ReportDataList reportId={report.id} />
      </DataBoundary>
    </ExpandableCard>
  );
};
