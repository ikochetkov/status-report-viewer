import React from 'react';
import StatusReportCard from './StatusReportCard.jsx';
import './StatusReportList.css';

export default function StatusReportList({ reports }) {
  return (
    <div className="status-report-list space-y-6">
      {reports.map((report, index) => (
        <StatusReportCard
          key={report.project || index}
          report={report}
        />
      ))}
    </div>
  );
}