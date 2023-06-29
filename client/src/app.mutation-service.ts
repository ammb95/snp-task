import { WithClientsMutationService } from './modules/clients/clients.mutation-service';
import { WithReportsMutationService } from './modules/reports/reports.mutation-service';
import { WithReportDataMutationService } from './modules/report-data/report-data.mutation-service';
import { WithSearchMutationService } from './modules/search/search.mutation-service';

export interface AppMutationService
  extends WithClientsMutationService,
    WithReportsMutationService,
    WithReportDataMutationService,
    WithSearchMutationService {}
