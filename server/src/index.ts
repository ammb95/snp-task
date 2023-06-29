import express from 'express';
import { initClientsModule } from './modules/clients/clients.module';
import { AppBaseRoutes } from './routes/routes.constants';
import { ClientsDatabase } from './modules/clients/clients.db';
import { ReportsDatabase } from './modules/reports/reports.db';
import { initReportsModule } from './modules/reports/reports.module';
import { configureCors } from './utils/configure-cors';
import { ReportDataDatabase } from './modules/report-data/report-data.db';
import { initReportDataModule } from './modules/report-data/report-data.module';

const app = express();
const port = 3001;

configureCors(app);

const clientsDb = new ClientsDatabase();
const reportsDb = new ReportsDatabase(clientsDb);
const reportDataDb = new ReportDataDatabase(reportsDb);

const clientsModule = initClientsModule(clientsDb, reportsDb);
const reportsModule = initReportsModule(reportsDb, clientsDb, reportDataDb);
const reportDataModule = initReportDataModule(reportDataDb, reportsDb);

app.use(AppBaseRoutes.CLIENTS_BASEPATH, clientsModule);
app.use(AppBaseRoutes.REPORTS_BASEPATH, reportsModule);
app.use(AppBaseRoutes.REPORT_DATA_BASEPATH, reportDataModule);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
