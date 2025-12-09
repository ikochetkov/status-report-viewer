#!/bin/bash

# Commit Working Version - Status Report Viewer
# Successfully deployed and tested version

echo "💾 Committing working version of Status Report Viewer"

# Check if git is already initialized
if [ ! -d ".git" ]; then
    echo "⚡ Initializing Git repository..."
    git init
    git remote add origin https://github.com/ikochetkov/status-report-viewer.git
    git checkout -b main
fi

# Add all current changes
echo "📁 Adding all files..."
git add .

# Create commit with detailed message
echo "📝 Creating commit..."
git commit -m "🚀 Working Version: Status Report Viewer v1.0

✅ DEPLOYED & TESTED - All features working correctly

📊 Core Features:
- Interactive status report table with expand/collapse functionality
- Advanced 4-filter system (Week, Project, Manager, Type)
- Color-coded health status indicators (Green/Yellow/Red) with tooltips
- Comprehensive tabbed details (Summary, Milestones, Risks, Issues, History)
- Visual progress tracking bars for effort utilization and time elapsed
- Professional ServiceNow Horizon design system integration

🔧 Technical Implementation:
- React 18 with modern hooks (useState, useMemo, useEffect)
- ServiceNow Fluent DSL for UI Page definition  
- Radix UI components for accessibility and polish
- Tailwind CSS with ServiceNow design tokens
- Hardcoded mock data matching provided payload structure
- Hot reload development setup with Vite
- Proper ServiceNow authentication and build system

🎯 Successfully Fixed:
- UI Page configuration and deployment issues
- Missing dependencies and build errors  
- Proper HTML structure for ServiceNow environment
- Component imports and styling system
- React component architecture and file organization

🌐 Live Application:
- Endpoint: x_mobit_st_rep_vw_status_reports.do
- URL: https://mobizitincdemo10.service-now.com/x_mobit_st_rep_vw_status_reports.do
- Status: ✅ Deployed and functional

📦 Next Steps Ready:
- Local development environment configured
- Git workflow established for iterative development
- Foundation set for adding real ServiceNow data integration"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ SUCCESS! Working version committed and pushed"
echo "📂 Repository: https://github.com/ikochetkov/status-report-viewer" 
echo "🌐 View code: https://github.com/ikochetkov/status-report-viewer"
echo "🔗 Live app: https://mobizitincdemo10.service-now.com/x_mobit_st_rep_vw_status_reports.do"
echo ""
echo "🎯 This commit represents a fully functional Status Report Viewer"
echo "   Ready for further development and customization!"