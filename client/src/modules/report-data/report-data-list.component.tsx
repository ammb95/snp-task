import { FunctionComponent } from 'react';
import { ReportDataComponent } from './ui/report-data/report-data.component';
import { useReportDataByReportId } from './hooks/use-report-data-by-report-id';

export interface ReportDataListProps {
  reportId: string;
}

export const ReportDataList: FunctionComponent<ReportDataListProps> = ({
  reportId
}) => {
  const reportData = useReportDataByReportId(reportId);
  return (
    <>
      {reportData.map(reportData => (
        <ReportDataComponent key={reportData.id} reportData={reportData} />
      ))}
    </>
  );
};
