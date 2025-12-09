import React, { useState, useMemo } from 'react';
import { StatusReportsTable } from './components/StatusReportsTable.jsx';
import { StatusFilters } from './components/StatusFilters.jsx';
import './app.css';

const HelloWorld = () => <h1 style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>Hello World</h1>;

// Convert hardcoded data to match the new interface structure
const transformedData = [
  {
    id: '1',
    projectNumber: 'PRJ0002789',
    shortDescription: 'MHS ServiceNow Onboarding, Termination and Teams Number Automation',
    overallHealth: 'green',
    schedule: 'green',
    cost: 'green',
    resource: 'green',
    scope: 'green',
    week: 'Week 48',
    projectManager: 'Igor Kochetkov',
    projectType: 'Implementation',
    startDate: '2025-10-13',
    endDate: '2025-11-10',
    percentComplete: 0,
    executiveSummary: 'No status report created for this project during the selected week.',
    achievements: [],
    keyPlannedActivities: [],
    plannedEffort: 160,
    actualEffort: 152,
    remainingEffort: 69,
    timeElapsed: 0,
    statusDate: '',
    overallHealthComments: '',
    scheduleComments: '',
    costComments: '',
    resourceComments: '',
    scopeComments: '',
    milestones: [],
    risks: [],
    issues: [],
    statusHistory: [],
    hasStatusReport: false
  },
  {
    id: '2',
    projectNumber: 'PRJ0002434',
    shortDescription: 'Tatweer ServiceNOW Implementation and Managed Services',
    overallHealth: 'green',
    schedule: 'green',
    cost: 'green',
    resource: 'green',
    scope: 'green',
    week: 'Week 48',
    projectManager: 'Igor Kochetkov',
    projectType: 'Staff Augmentation',
    startDate: '2024-08-04',
    endDate: '2024-08-08',
    percentComplete: 0,
    executiveSummary: 'No status report created for this project during the selected week.',
    achievements: [],
    keyPlannedActivities: [],
    plannedEffort: 0,
    actualEffort: 35.25,
    remainingEffort: -35.25,
    timeElapsed: 0,
    statusDate: '',
    overallHealthComments: '',
    scheduleComments: '',
    costComments: '',
    resourceComments: '',
    scopeComments: '',
    milestones: [],
    risks: [],
    issues: [],
    statusHistory: [],
    hasStatusReport: false
  },
  {
    id: '3',
    projectNumber: 'PRJ0002737',
    shortDescription: 'ServiceNow SPM Implementation for Mobiz',
    overallHealth: 'yellow',
    schedule: 'yellow',
    cost: 'yellow',
    resource: 'yellow',
    scope: 'yellow',
    week: 'Week 48',
    projectManager: 'Igor Kochetkov',
    projectType: 'Implementation',
    startDate: '2025-06-30',
    endDate: '2025-10-07',
    percentComplete: 36.8,
    executiveSummary: 'In auctor, massa at convallis elementum, orci nisi pretium tortor, nec fringilla est eros nec elit. Praesent eget erat leo. Curabitur volutpat nibh vel sem pretium ultrices. Nulla id congue elit. Mauris vestibulum ante eget orci hendrerit varius.',
    achievements: [
      'Completed development environment migration',
      'Successfully tested core modules in UAT',
      'Established project governance framework'
    ],
    keyPlannedActivities: [
      'Complete production environment setup',
      'Conduct final security audit',
      'Execute go-live plan'
    ],
    plannedEffort: 1091,
    actualEffort: 1380.7,
    remainingEffort: -140.5,
    timeElapsed: 98,
    statusDate: '2025-12-07',
    overallHealthComments: 'Project is experiencing some challenges but manageable.',
    scheduleComments: 'Schedule is slightly behind due to resource constraints.',
    costComments: 'Budget is being monitored closely due to increased effort.',
    resourceComments: 'Additional resources may be needed in Q1.',
    scopeComments: 'Scope remains stable with minor adjustments.',
    milestones: [
      {
        id: '3.1',
        shortDescription: 'Development Environment Setup',
        plannedStartDate: '2025-06-30',
        actualStartDate: '2025-06-30',
        state: 'Completed',
        variance: '0'
      },
      {
        id: '3.2',
        shortDescription: 'UAT Phase',
        plannedStartDate: '2025-08-15',
        actualStartDate: '2025-08-20',
        state: 'In Progress',
        variance: '5 days'
      }
    ],
    risks: [
      {
        id: '3.1',
        shortDescription: 'Not enough resources',
        assignedTo: 'Igor Kochetkov',
        probability: 'High',
        riskStatus: 'Open',
        state: 'Pending',
        dueDate: '2025-12-31'
      },
      {
        id: '3.2',
        shortDescription: 'Low resources quality',
        assignedTo: '',
        probability: 'High',
        riskStatus: 'Open',
        state: 'Pending',
        dueDate: '2025-12-31'
      }
    ],
    issues: [
      {
        id: '3.1',
        shortDescription: 'Actual effort doesn\'t match time cards date',
        assignedTo: 'Fares Arnous',
        priority: '4 - Low',
        state: 'Closed Complete',
        dueDate: '2025-01-15'
      }
    ],
    statusHistory: [
      {
        id: '3.1',
        statusDate: '2025-12-07',
        overall: 'green',
        schedule: 'yellow',
        cost: 'red',
        resource: 'green',
        scope: 'green'
      },
      {
        id: '3.2',
        statusDate: '2025-11-25',
        overall: 'green',
        schedule: 'green',
        cost: 'green',
        resource: 'green',
        scope: 'green'
      }
    ],
    hasStatusReport: true
  }
];

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState('all');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedManager, setSelectedManager] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Generate weeks from December to today
  const generateWeeks = () => {
    const weeks = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Start from December 1st of current year
    let weekStart = new Date(currentYear, 11, 1); // December 1st
    
    // Adjust to Monday if December 1st is not a Monday
    const day = weekStart.getDay();
    const diff = weekStart.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    weekStart = new Date(weekStart.setDate(diff));
    
    let weekNumber = 1;
    
    // Generate weeks until today
    while (weekStart <= currentDate) {
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6); // Add 6 days to get Sunday
      
      const startStr = weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const endStr = weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const displayLabel = `Week ${weekNumber} (${startStr} - ${endStr})`;
      const valueDate = weekStart.toISOString().split('T')[0]; // YYYY-MM-DD format
      
      weeks.push({
        label: displayLabel,
        value: valueDate
      });
      
      // Move to next week (Monday)
      weekStart.setDate(weekStart.getDate() + 7);
      weekNumber++;
    }
    
    return weeks;
  };

  const weeks = useMemo(() => generateWeeks(), []);
  
  const projectManagers = useMemo(() => 
    Array.from(new Set(transformedData.map(p => p.projectManager))).sort(),
    []
  );
  
  const projectTypes = useMemo(() => 
    Array.from(new Set(transformedData.map(p => p.projectType))).sort(),
    []
  );

  const projects = useMemo(() => 
    transformedData.map(p => ({ value: p.projectNumber, label: `${p.projectNumber} - ${p.shortDescription}` })),
    []
  );

  // Filter projects based on selections
  const filteredProjects = useMemo(() => {
    return transformedData.filter(project => {
      if (selectedWeek !== 'all') {
        // Convert selectedWeek (YYYY-MM-DD format) back to week number for comparison
        const selectedDate = new Date(selectedWeek);
        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth();
        const selectedDay = selectedDate.getDate();
        
        // Calculate week number from the date
        const decemberFirst = new Date(selectedYear, 11, 1);
        const day = decemberFirst.getDay();
        const decStart = new Date(decemberFirst.setDate(1 - day + (day === 0 ? -6 : 1)));
        
        const timeDiff = selectedDate - decStart;
        const weekNum = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000)) + 1;
        const expectedWeekLabel = `Week ${weekNum}`;
        
        if (!project.week.includes(expectedWeekLabel)) return false;
      }
      if (selectedProject !== 'all' && project.projectNumber !== selectedProject) return false;
      if (selectedManager !== 'all' && project.projectManager !== selectedManager) return false;
      if (selectedType !== 'all' && project.projectType !== selectedType) return false;
      return true;
    });
  }, [selectedWeek, selectedProject, selectedManager, selectedType]);

  return (
    <div className="min-h-screen bg-background">
      <HelloWorld />
      <div className="container mx-auto p-8 max-w-[1400px]">
        <div className="mb-8">
          <h1 className="text-foreground mb-2">Project Status Reports</h1>
          <p className="text-muted-foreground">Monitor project health and track key performance indicators</p>
        </div>

        <StatusFilters
          weeks={weeks}
          projects={projects}
          projectManagers={projectManagers}
          projectTypes={projectTypes}
          selectedWeek={selectedWeek}
          selectedProject={selectedProject}
          selectedManager={selectedManager}
          selectedType={selectedType}
          onWeekChange={setSelectedWeek}
          onProjectChange={setSelectedProject}
          onManagerChange={setSelectedManager}
          onTypeChange={setSelectedType}
        />

        <StatusReportsTable projects={filteredProjects} />
      </div>
    </div>
  );
}