import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Report } from '../modules/reports/report.model';
import { ReportData } from '../modules/report-data/report-data.model';
import { BASE_API_URL } from './api.constants';
import { Client } from '../modules/clients/client.model';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: builder => ({
    getClients: builder.query<Client[], void>({
      query: () => 'clients'
    }),
    addClient: builder.mutation<Client, void>({
      query: () => ({
        url: 'clients',
        method: 'post'
      })
    }),
    deleteClient: builder.mutation<void, string>({
      query: clientId => ({
        url: `clients/${clientId}`,
        method: 'delete'
      })
    }),
    getReports: builder.query<Report[], void>({
      query: () => 'reports'
    }),
    addReport: builder.mutation<Report, string>({
      query: clientId => ({
        url: `reports/${clientId}`,
        method: 'post'
      })
    }),
    deleteReport: builder.mutation<void, string>({
      query: reportId => ({
        url: `reports/${reportId}`,
        method: 'delete'
      })
    }),
    getReportData: builder.query<ReportData[], void>({
      query: () => 'data'
    }),
    addReportData: builder.mutation<ReportData, string>({
      query: reportId => ({
        url: `data/${reportId}`,
        method: 'post'
      })
    }),
    deleteReportData: builder.mutation<void, string>({
      query: dataId => ({
        url: `data/${dataId}`,
        method: 'delete'
      })
    })
  })
});

export const {
  useGetClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useGetReportsQuery,
  useAddReportMutation,
  useDeleteReportMutation,
  useGetReportDataQuery,
  useAddReportDataMutation,
  useDeleteReportDataMutation
} = api;

export default api;
