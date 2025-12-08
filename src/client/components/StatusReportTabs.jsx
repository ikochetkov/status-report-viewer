import React, { useState } from 'react';
import './StatusReportTabs.css';

export default function StatusReportTabs({ report }) {
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'risks', label: 'Risks' },
    { id: 'issues', label: 'Issues' },
    { id: 'history', label: 'Status History' }
  ];

  const renderHtmlContent = (html) => {
    if (!html) return null;
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="status-report-tabs">
      {/* Tab Navigation */}
      <div className="tab-nav border-b border-border mb-4">
        <div className="flex gap-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button pb-2 px-1 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'summary' && (
          <div className="summary-tab space-y-4">
            {report.executive_summary && (
              <div>
                <h4 className="font-medium mb-2">Executive Summary</h4>
                {renderHtmlContent(report.executive_summary)}
              </div>
            )}
            
            {report.achievements_last_week && (
              <div>
                <h4 className="font-medium mb-2">Achievements Last Week</h4>
                {renderHtmlContent(report.achievements_last_week)}
              </div>
            )}
            
            {report.key_activities_next_week && (
              <div>
                <h4 className="font-medium mb-2">Key Activities Next Week</h4>
                {renderHtmlContent(report.key_activities_next_week)}
              </div>
            )}
            
            {report.comments && (
              <div>
                <h4 className="font-medium mb-2">Comments</h4>
                {renderHtmlContent(report.comments)}
              </div>
            )}
            
            {report.scope_comments && (
              <div>
                <h4 className="font-medium mb-2">Scope Comments</h4>
                {renderHtmlContent(report.scope_comments)}
              </div>
            )}
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="milestones-tab">
            {report.milestones && report.milestones.length > 0 ? (
              <div className="space-y-2">
                {report.milestones.map((milestone, index) => (
                  <div key={index} className="milestone-item p-3 border border-border rounded">
                    <div className="font-medium">{milestone.name}</div>
                    <div className="text-sm text-muted-foreground">{milestone.due_date}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No milestones available</p>
            )}
          </div>
        )}

        {activeTab === 'risks' && (
          <div className="risks-tab">
            {report.risks && report.risks.length > 0 ? (
              <div className="space-y-3">
                {report.risks.map((risk, index) => (
                  <div key={index} className="risk-item p-4 border border-border rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{risk.number}</div>
                      <div className="text-sm text-muted-foreground">{risk.probability} Probability</div>
                    </div>
                    <div className="mb-2">{risk.short_description}</div>
                    <div className="text-sm text-muted-foreground">
                      Assigned to: {risk.assigned_to || 'Unassigned'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      State: {risk.state}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No risks available</p>
            )}
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="issues-tab">
            {report.issues && report.issues.length > 0 ? (
              <div className="space-y-3">
                {report.issues.map((issue, index) => (
                  <div key={index} className="issue-item p-4 border border-border rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{issue.number}</div>
                      <div className="text-sm text-muted-foreground">Priority: {issue.priority}</div>
                    </div>
                    <div className="mb-2">{issue.short_description}</div>
                    <div className="text-sm text-muted-foreground">
                      Assigned to: {issue.assigned_to || 'Unassigned'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      State: {issue.state}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No issues available</p>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-tab">
            {report.status_history && report.status_history.length > 0 ? (
              <div className="space-y-3">
                {report.status_history.map((history, index) => (
                  <div key={index} className="history-item p-4 border border-border rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{history.number}</div>
                      <div className="text-sm text-muted-foreground">As of: {history.as_on}</div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-2">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Overall</div>
                        <div className={`health-badge ${history.overall_health?.toLowerCase()}`}>
                          {history.overall_health}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Schedule</div>
                        <div className={`health-badge ${history.schedule?.toLowerCase()}`}>
                          {history.schedule}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Cost</div>
                        <div className={`health-badge ${history.cost?.toLowerCase()}`}>
                          {history.cost}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Resources</div>
                        <div className={`health-badge ${history.resources?.toLowerCase()}`}>
                          {history.resources}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Scope</div>
                        <div className={`health-badge ${history.scope?.toLowerCase()}`}>
                          {history.scope}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No status history available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}