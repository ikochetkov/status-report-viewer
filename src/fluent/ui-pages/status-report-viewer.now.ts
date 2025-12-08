import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import statusReportPage from '../../client/index.html'

export const status_report_viewer = UiPage({
  $id: Now.ID['status-report-viewer'],
  endpoint: 'x_mobit_st_rep_vw_status_reports.do',
  description: 'Status Report Viewer with hardcoded data',
  category: 'general',
  html: statusReportPage,
  direct: true
})