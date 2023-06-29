import { FunctionComponent } from 'react';
import { ReportComponent } from './ui/report/report.component';
import { DataBoundary } from '../../components/data-boundary/data-boundary.component';
import { CreateReportButton } from './ui/create-report-button/create-report-button.component';
import { useReportsState } from './hooks/use-reports-state';
import { useClientReports } from './hooks/use-client-reports';
import styles from './reports.module.scss';

export interface ReportsProps {
  clientId: string;
}

export const Reports: FunctionComponent<ReportsProps> = ({ clientId }) => {
  const clientReports = useClientReports(clientId);
  const {
    reportsState: { isLoadingReports }
  } = useReportsState();

  return (
    <div className={styles.reports}>
      <div className={styles['reports-header']}>
        <span>Client Reports</span>
        <CreateReportButton clientId={clientId} />
      </div>
      <DataBoundary
        data={clientReports}
        message='Client has no reports!'
        isLoading={isLoadingReports}
      >
        {clientReports?.map(report => (
          <ReportComponent key={report.id} report={report} />
        ))}
      </DataBoundary>
    </div>
  );
};
