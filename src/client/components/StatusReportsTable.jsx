import React, { useState } from 'react';
import { ChevronDown, ChevronRight, User, Calendar, Moon } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator.jsx';
import { ProjectDetails } from './ProjectDetails.jsx';

export function StatusReportsTable({ projects }) {
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const toggleProject = (projectId) => {
    const newExpanded = new Set(expandedProjects);
    if (expandedProjects.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-card rounded border border-border overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          
          {/* Table Header */}
          <div className="bg-secondary border-b border-border">
            <div className="grid grid-cols-[60px_1fr_140px_140px_140px_140px_140px] gap-4 px-4 py-3">
              <div></div>
              <div className="text-foreground font-medium">Project</div>
              <div className="text-foreground font-medium text-center">Overall Health</div>
              <div className="text-foreground font-medium text-center">Schedule</div>
              <div className="text-foreground font-medium text-center">Cost</div>
              <div className="text-foreground font-medium text-center">Resource</div>
              <div className="text-foreground font-medium text-center">Scope</div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {projects.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No projects found matching the selected filters
              </div>
            ) : (
              projects.map(project => {
                const isExpanded = expandedProjects.has(project.id);
                return (
                  <div key={project.id} className="border-b border-border last:border-b-0">
                    
                    {/* Main Row */}
                    <div className="grid grid-cols-[60px_1fr_140px_140px_140px_140px_140px] gap-4 px-4 py-4 hover:bg-secondary/50 transition-colors">
                      
                      {/* Expand Button */}
                      <div className="flex items-start pt-1">
                        <button
                          onClick={() => toggleProject(project.id)}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        >
                          {isExpanded ? (
                            <ChevronDown className="size-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="size-5 text-muted-foreground" />
                          )}
                        </button>
                      </div>

                      {/* Project Info Column */}
                      <div>
                        <div className="text-foreground mb-1 font-medium">{project.projectNumber}</div>
                        <div className="text-muted-foreground mb-2">{project.shortDescription}</div>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="size-4" />
                            <span>{project.projectManager}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                          </div>
                          {project.hasStatusReport ? (
                            <div>
                              <span className="text-foreground font-medium">{project.percentComplete}% Complete</span>
                              <span className="mx-2 text-border">|</span>
                              <span>Status Date: <span className="text-foreground font-medium">{project.statusDate}</span></span>
                            </div>
                          ) : (
                            <div>
                              <span className="text-muted-foreground">No status report created for selected week</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Status Indicators (5 columns) */}
                      {project.hasStatusReport ? (
                        <>
                          <div className="flex items-start justify-center pt-1">
                            <StatusIndicator status={project.overallHealth} comments={project.overallHealthComments} />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <StatusIndicator status={project.schedule} comments={project.scheduleComments} />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <StatusIndicator status={project.cost} comments={project.costComments} />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <StatusIndicator status={project.resource} comments={project.resourceComments} />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <StatusIndicator status={project.scope} comments={project.scopeComments} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-start justify-center pt-1">
                            <Moon className="size-5 text-muted-foreground" />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <Moon className="size-5 text-muted-foreground" />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <Moon className="size-5 text-muted-foreground" />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <Moon className="size-5 text-muted-foreground" />
                          </div>
                          <div className="flex items-start justify-center pt-1">
                            <Moon className="size-5 text-muted-foreground" />
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Expanded Details Section */}
                    {isExpanded && (
                      <div className="bg-secondary/30 px-4 py-6 border-t border-border">
                        {project.hasStatusReport ? (
                          <ProjectDetails project={project} />
                        ) : (
                          <div className="text-center py-12">
                            <Moon className="size-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-foreground mb-2">No Status Report Available</h3>
                            <p className="text-muted-foreground">
                              A status report has not been created for this project during the selected week.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      
      {/* Footer with Count */}
      {projects.length > 0 && (
        <div className="px-6 py-4 border-t border-border bg-secondary/30">
          <p className="text-muted-foreground">
            Showing {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      )}
    </div>
  );
}