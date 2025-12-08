import React, { useState } from 'react';
import { CheckCircle2, Clock, ExternalLink, Circle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs.tsx';
import { Switch } from './ui/switch.tsx';
import { Label } from './ui/label.tsx';

export function ProjectDetails({ project }) {
  const [showActiveMilestonesOnly, setShowActiveMilestonesOnly] = useState(false);
  const [showActiveRisksOnly, setShowActiveRisksOnly] = useState(false);
  const [showActiveIssuesOnly, setShowActiveIssuesOnly] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'green':
        return 'text-[#0F9D58] fill-[#0F9D58]';
      case 'yellow':
        return 'text-[#F0AB00] fill-[#F0AB00]';
      case 'red':
        return 'text-[#DA1E28] fill-[#DA1E28]';
      default:
        return 'text-muted-foreground fill-muted-foreground';
    }
  };

  // Filter functions
  const filteredMilestones = showActiveMilestonesOnly
    ? project.milestones.filter(m => m.state !== 'Completed')
    : project.milestones;

  const filteredRisks = showActiveRisksOnly
    ? project.risks.filter(r => r.state !== 'Closed')
    : project.risks;

  const filteredIssues = showActiveIssuesOnly
    ? project.issues.filter(i => i.state !== 'Closed')
    : project.issues;

  return (
    <Tabs defaultValue="summary" className="w-full">
      {/* Tab Navigation */}
      <TabsList className="mb-6 bg-muted">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="milestones">Milestones</TabsTrigger>
        <TabsTrigger value="risks">Risks</TabsTrigger>
        <TabsTrigger value="issues">Issues</TabsTrigger>
        <TabsTrigger value="history">Status History</TabsTrigger>
      </TabsList>

      {/* ============ SUMMARY TAB ============ */}
      <TabsContent value="summary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            
            {/* Executive Summary */}
            <div>
              <h3 className="text-foreground mb-2">Executive Summary</h3>
              <hr className="mb-3" />
              <p className="text-muted-foreground leading-relaxed">{project.executiveSummary}</p>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-foreground mb-2">Achievements</h3>
              <hr className="mb-3" />
              {project.achievements.length > 0 ? (
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="size-5 text-[#0F9D58] flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No achievements reported yet.</p>
              )}
            </div>

            {/* Key Planned Activities */}
            <div>
              <h3 className="text-foreground mb-2">Key Planned Activities</h3>
              <hr className="mb-3" />
              {project.keyPlannedActivities.length > 0 ? (
                <ul className="space-y-2">
                  {project.keyPlannedActivities.map((activity, index) => (
                    <li key={index} className="flex gap-2">
                      <Clock className="size-5 text-[#0F62FE] flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No key activities planned.</p>
              )}
            </div>
          </div>

          {/* Right Column - Effort Metrics */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground">Effort Tracking</h3>
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-[#0F62FE] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Navigate to full status report page');
                }}
              >
                View full status report
                <ExternalLink className="size-4" />
              </a>
            </div>
            <hr className="mb-4" />
            
            <div className="bg-card rounded border border-border p-4 space-y-4">
              {/* Effort Numbers in One Line */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border">
                <div>
                  <div className="text-muted-foreground mb-1">Planned Effort (SOW)</div>
                  <div className="text-foreground">{project.plannedEffort.toLocaleString()} hrs</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Actual Effort</div>
                  <div className="text-foreground">{project.actualEffort.toLocaleString()} hrs</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Remaining Effort</div>
                  <div className="text-foreground">{project.remainingEffort.toLocaleString()} hrs</div>
                </div>
              </div>

              {/* Planned End Date */}
              <div className="pb-4 border-b border-border">
                <div className="text-muted-foreground mb-1">Planned End Date</div>
                <div className="text-foreground">{formatDate(project.endDate)}</div>
              </div>

              {/* Effort Utilized Progress Bar */}
              <div>
                <div className="flex justify-between text-muted-foreground mb-2">
                  <span>Effort Utilized</span>
                  <span>{Math.round((project.actualEffort / project.plannedEffort) * 100)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-[#0F62FE] h-2 rounded-full transition-all"
                    style={{ width: `${Math.min((project.actualEffort / project.plannedEffort) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Time Elapsed Progress Bar */}
              <div>
                <div className="flex justify-between text-muted-foreground mb-2">
                  <span>Time Elapsed</span>
                  <span>{project.timeElapsed}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-[#7B61FF] h-2 rounded-full transition-all"
                    style={{ width: `${project.timeElapsed}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* ============ MILESTONES TAB ============ */}
      <TabsContent value="milestones">
        <div className="bg-card rounded border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Short description</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Planned start date</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Actual start date</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">State</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium">Variance</th>
                </tr>
              </thead>
              <tbody>
                {filteredMilestones.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                      No milestones defined
                    </td>
                  </tr>
                ) : (
                  filteredMilestones.map((milestone) => (
                    <tr key={milestone.id} className="border-b border-border last:border-b-0 hover:bg-secondary/50">
                      <td className="px-4 py-3 text-foreground border-r border-border last:border-r-0">{milestone.shortDescription}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{formatDate(milestone.plannedStartDate)}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{formatDate(milestone.actualStartDate)}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{milestone.state}</td>
                      <td className="px-4 py-3 text-muted-foreground">{milestone.variance}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border">
            <Label className="inline-flex items-center gap-2">
              <Switch
                checked={showActiveMilestonesOnly}
                onCheckedChange={setShowActiveMilestonesOnly}
              />
              Show active milestones only
            </Label>
          </div>
        </div>
      </TabsContent>

      {/* ============ RISKS TAB ============ */}
      <TabsContent value="risks">
        <div className="bg-card rounded border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Short description</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Assigned to</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Probability</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Risk status</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">State</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium">Due date</th>
                </tr>
              </thead>
              <tbody>
                {filteredRisks.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      No risks identified
                    </td>
                  </tr>
                ) : (
                  filteredRisks.map((risk) => (
                    <tr key={risk.id} className="border-b border-border last:border-b-0 hover:bg-secondary/50">
                      <td className="px-4 py-3 text-foreground border-r border-border last:border-r-0">{risk.shortDescription}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{risk.assignedTo || 'Unassigned'}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{risk.probability}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{risk.riskStatus}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{risk.state}</td>
                      <td className="px-4 py-3 text-muted-foreground">{formatDate(risk.dueDate)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border">
            <Label className="inline-flex items-center gap-2">
              <Switch
                checked={showActiveRisksOnly}
                onCheckedChange={setShowActiveRisksOnly}
              />
              Show active risks only
            </Label>
          </div>
        </div>
      </TabsContent>

      {/* ============ ISSUES TAB ============ */}
      <TabsContent value="issues">
        <div className="bg-card rounded border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Short description</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Assigned to</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Priority</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">State</th>
                  <th className="px-4 py-3 text-left text-foreground font-medium">Due date</th>
                </tr>
              </thead>
              <tbody>
                {filteredIssues.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                      No issues reported
                    </td>
                  </tr>
                ) : (
                  filteredIssues.map((issue) => (
                    <tr key={issue.id} className="border-b border-border last:border-b-0 hover:bg-secondary/50">
                      <td className="px-4 py-3 text-foreground border-r border-border last:border-r-0">{issue.shortDescription}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{issue.assignedTo || 'Unassigned'}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{issue.priority}</td>
                      <td className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0">{issue.state}</td>
                      <td className="px-4 py-3 text-muted-foreground">{formatDate(issue.dueDate)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border">
            <Label className="inline-flex items-center gap-2">
              <Switch
                checked={showActiveIssuesOnly}
                onCheckedChange={setShowActiveIssuesOnly}
              />
              Show active issues only
            </Label>
          </div>
        </div>
      </TabsContent>

      {/* ============ STATUS HISTORY TAB ============ */}
      <TabsContent value="history">
        <div className="bg-card rounded border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-foreground font-medium border-r border-border last:border-r-0">Status Date</th>
                  <th className="px-4 py-3 text-center text-foreground font-medium border-r border-border last:border-r-0">Overall</th>
                  <th className="px-4 py-3 text-center text-foreground font-medium border-r border-border last:border-r-0">Schedule</th>
                  <th className="px-4 py-3 text-center text-foreground font-medium border-r border-border last:border-r-0">Cost</th>
                  <th className="px-4 py-3 text-center text-foreground font-medium border-r border-border last:border-r-0">Resource</th>
                  <th className="px-4 py-3 text-center text-foreground font-medium">Scope</th>
                </tr>
              </thead>
              <tbody>
                {project.statusHistory.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      No status history available
                    </td>
                  </tr>
                ) : (
                  project.statusHistory.map((entry) => (
                    <tr key={entry.id} className="border-b border-border last:border-b-0 hover:bg-secondary/50">
                      <td className="px-4 py-3 text-foreground border-r border-border last:border-r-0">{entry.statusDate}</td>
                      <td className="px-4 py-3 text-center border-r border-border last:border-r-0">
                        <Circle className={`size-4 inline ${getStatusColor(entry.overall)}`} />
                      </td>
                      <td className="px-4 py-3 text-center border-r border-border last:border-r-0">
                        <Circle className={`size-4 inline ${getStatusColor(entry.schedule)}`} />
                      </td>
                      <td className="px-4 py-3 text-center border-r border-border last:border-r-0">
                        <Circle className={`size-4 inline ${getStatusColor(entry.cost)}`} />
                      </td>
                      <td className="px-4 py-3 text-center border-r border-border last:border-r-0">
                        <Circle className={`size-4 inline ${getStatusColor(entry.resource)}`} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Circle className={`size-4 inline ${getStatusColor(entry.scope)}`} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}