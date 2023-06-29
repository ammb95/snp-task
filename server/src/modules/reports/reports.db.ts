import { Report } from './reports.model';
import { DEFAULT_NUMBER_OF_REPORTS_PER_CLIENT } from './reports.constants';
import { ClientsDatabase } from '../clients/clients.db';
import { createReport } from './reports.utils';

export class ReportsDatabase {
  private reports: Report[];
  private clientsDb: ClientsDatabase;

  constructor(
    clientsDb: ClientsDatabase,
    reportsPerClient = DEFAULT_NUMBER_OF_REPORTS_PER_CLIENT
  ) {
    this.clientsDb = clientsDb;
    this.populateReports(reportsPerClient);
  }

  private async populateReports(reportsPerClient: number): Promise<void> {
    let clients = await this.clientsDb.getClients();

    while (!clients.length) {
      clients = await this.clientsDb.getClients();
    }

    const reportsDraft = [];
    clients.forEach(client => {
      for (let i = 0; i < reportsPerClient; i++) {
        reportsDraft.push(createReport(client.id));
      }
    });

    this.reports = reportsDraft;
  }

  async getReports(): Promise<Report[]> {
    return Promise.resolve(this.reports);
  }

  async getReportsByClientId(clientId: string): Promise<Report[]> {
    return Promise.resolve(
      this.reports.filter(report => report.clientId === clientId)
    );
  }

  async getReport(reportId: string): Promise<Report> {
    return Promise.resolve(this.reports.find(report => report.id === reportId));
  }

  async addReport(clientId: string): Promise<Report> {
    const newReport = createReport(clientId);
    this.reports = [...this.reports, newReport];

    return Promise.resolve(newReport);
  }

  async deleteReport(reportId: string): Promise<void> {
    this.reports = this.reports.filter(report => report.id !== reportId);
  }

  async deleteReportByClientId(clientId: string): Promise<void> {
    this.reports = this.reports.filter(report => report.clientId !== clientId);
  }
}
