#!/bin/bash

# Git Setup and Push Commands for Status Report Viewer
# Run these commands in your terminal to push this project to GitHub

echo "🚀 Setting up Git repository for Status Report Viewer"

# Step 1: Initialize Git repository
git init

# Step 2: Add your GitHub repository as origin
git remote add origin https://github.com/ikochetkov/status-report-viewer.git

# Step 3: Create and switch to main branch
git checkout -b main

# Step 4: Add all files to Git
git add .

# Step 5: Create initial commit
git commit -m "Initial commit: ServiceNow Status Report Viewer

✨ Features:
- Interactive project status table with expand/collapse
- Advanced filtering (Week, Project, Manager, Type)  
- Color-coded health indicators (Green/Yellow/Red)
- Tabbed project details (Summary, Milestones, Risks, Issues, History)
- Progress tracking with visual progress bars
- ServiceNow Horizon design system
- Local development with Vite hot reload
- ServiceNow Fluent API integration

🛠 Tech Stack:
- React 18 + Hooks
- Tailwind CSS + ServiceNow design tokens
- Radix UI components
- Lucide React icons
- ServiceNow SDK + Fluent DSL
- Vite build system"

# Step 6: Push to GitHub
git push -u origin main

echo "✅ Project successfully pushed to GitHub!"
echo "📂 Repository: https://github.com/ikochetkov/status-report-viewer"
echo "🌐 View online: https://github.com/ikochetkov/status-report-viewer"