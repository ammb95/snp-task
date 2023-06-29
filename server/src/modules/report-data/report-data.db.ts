import { createReportData } from './report-data.utils';
import { ReportData } from './report-data.model';
import { ReportsDatabase } from '../reports/reports.db';

export class ReportDataDatabase {
  private reportData: ReportData[];
  private reportsDb: ReportsDatabase;

  constructor(reportsDb: ReportsDatabase) {
    this.reportsDb = reportsDb;
    this.populatReportData();
  }

  private async populatReportData() {
    let reports = await this.reportsDb.getReports();

    while (!reports?.length) {
      reports = await this.reportsDb.getReports();
    }

    const reportDataDraft = [];
    reports.forEach(report => {
      reportDataDraft.push(createReportData(report.id));
    });

    this.reportData = reportDataDraft;
  }

  async getAllReportData(): Promise<ReportData[]> {
    return Promise.resolve(this.reportData);
  }

  async getReportData(dataId: string): Promise<ReportData> {
    return Promise.resolve(this.reportData.find(d => d.id === dataId));
  }

  async getReportDataByReportId(reportId: string): Promise<ReportData[]> {
    return Promise.resolve(
      this.reportData.filter(d => d.reportId === reportId)
    );
  }

  async addReportData(reportId: string): Promise<ReportData> {
    const newData = createReportData(reportId);
    this.reportData.push(newData);
    return Promise.resolve(newData);
  }

  async deleteReportData(dataId: string): Promise<void> {
    this.reportData = this.reportData.filter(d => d.id !== dataId);
  }

  async deleteReportByReportId(reportId: string): Promise<void> {
    this.reportData = this.reportData.filter(d => d.reportId !== reportId);
  }
}
