import { FunctionComponent } from 'react';
import { ReportData } from '../../report-data.model';
import { LineGraph } from '../../../../components/line-graph/line-graph.component';
import { DeleteReportDataButton } from '../delete-report-data-button/delete-report-data-button.component';
import styles from './report-data.module.scss';

export interface ReportDataComponentProps {
  reportData: ReportData;
}

export const ReportDataComponent: FunctionComponent<
  ReportDataComponentProps
> = ({ reportData }) => {
  return (
    <div className={styles['report-data-component']}>
      <LineGraph data={reportData.values} />
      <DeleteReportDataButton dataId={reportData.id} />
    </div>
  );
};
