import React, { useState } from 'react';
import HealthIndicator from './HealthIndicator.jsx';
import StatusReportTabs from './StatusReportTabs.jsx';
import './StatusReportCard.css';

export default function StatusReportCard({ report }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasDetailedData = report.number && report.overall_health;
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatPercentage = (value) => {
    if (!value) return '';
    return `${value}%`;
  };

  return (
    <div className="status-report-card bg-card border border-border rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="report-header">
        <div className="grid grid-cols-[60px_1fr_140px_140px_140px_140px_140px] gap-4 items-center mb-4">
          <div className="text-xs text-muted-foreground font-medium">
            {report.project_number}
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-medium text-foreground mb-1">
              {report.short_description}
            </h3>
            <div className="text-sm text-muted-foreground">
              PM: {report.project_manager}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Overall Health</div>
            <HealthIndicator status={report.overall_health} />
          </div>
          
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Schedule</div>
            <HealthIndicator status={report.schedule} />
          </div>
          
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Cost</div>
            <HealthIndicator status={report.cost} />
          </div>
          
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Resources</div>
            <HealthIndicator status={report.resources} />
          </div>
          
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Scope</div>
            <HealthIndicator status={report.scope} />
          </div>
        </div>

        {/* Additional Info Row */}
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Start Date: </span>
            <span className="text-foreground">{formatDate(report.approved_start_date)}</span>
          </div>
          
          <div>
            <span className="text-muted-foreground">End Date: </span>
            <span className="text-foreground">{formatDate(report.approved_end_date)}</span>
          </div>
          
          <div>
            <span className="text-muted-foreground">Progress: </span>
            <span className="text-foreground">{formatPercentage(report.percent_complete)}</span>
          </div>
          
          <div>
            <span className="text-muted-foreground">Effort: </span>
            <span className="text-foreground">
              {report.x_mobit_spm_enh_actual_effort}/{report.x_mobit_spm_enh_planned_effort_sow}h
            </span>
          </div>
        </div>
        
        {hasDetailedData && (
          <button
            className="expand-button mt-4 text-primary hover:underline text-sm font-medium cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        )}
      </div>

      {/* Expandable Content */}
      {hasDetailedData && isExpanded && (
        <div className="report-details mt-6 pt-6 border-t border-border">
          <StatusReportTabs report={report} />
        </div>
      )}
    </div>
  );
}