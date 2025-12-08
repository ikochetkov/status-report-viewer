import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select.tsx';
import { Label } from './ui/label.tsx';

export function StatusFilters({
  weeks,
  projects,
  projectManagers,
  projectTypes,
  selectedWeek,
  selectedProject,
  selectedManager,
  selectedType,
  onWeekChange,
  onProjectChange,
  onManagerChange,
  onTypeChange,
}) {
  return (
    <div className="bg-card rounded border border-border p-6 mb-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Week Filter */}
        <div className="space-y-2">
          <Label htmlFor="week" className="text-foreground">Week</Label>
          <Select value={selectedWeek} onValueChange={onWeekChange}>
            <SelectTrigger id="week" className="bg-input-background border-border">
              <SelectValue placeholder="Select week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Weeks</SelectItem>
              {weeks.map(week => (
                <SelectItem key={week} value={week}>{week}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Project Filter */}
        <div className="space-y-2">
          <Label htmlFor="project" className="text-foreground">Project</Label>
          <Select value={selectedProject} onValueChange={onProjectChange}>
            <SelectTrigger id="project" className="bg-input-background border-border">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              {projects.map(project => (
                <SelectItem key={project.value} value={project.value}>
                  {project.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Project Manager Filter */}
        <div className="space-y-2">
          <Label htmlFor="manager" className="text-foreground">Project Manager</Label>
          <Select value={selectedManager} onValueChange={onManagerChange}>
            <SelectTrigger id="manager" className="bg-input-background border-border">
              <SelectValue placeholder="Select manager" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Managers</SelectItem>
              {projectManagers.map(manager => (
                <SelectItem key={manager} value={manager}>{manager}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Project Type Filter */}
        <div className="space-y-2">
          <Label htmlFor="type" className="text-foreground">Project Type</Label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger id="type" className="bg-input-background border-border">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {projectTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}