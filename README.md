# 📊 Status Report Viewer

A professional ServiceNow application for monitoring project health and tracking key performance indicators. Built with React and ServiceNow Fluent DSL.

![ServiceNow](https://img.shields.io/badge/ServiceNow-Fluent%20DSL-00a1c9)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![Status](https://img.shields.io/badge/Status-✅%20Deployed-success)

## 🌟 Live Application

**🔗 Access the deployed application:** 
https://mobizitincdemo10.service-now.com/x_mobit_st_rep_vw_status_reports.do

## ✨ Features

### 📋 **Interactive Status Table**
- Expandable project rows with detailed information
- Clean, professional table layout with proper column alignment
- Expand/collapse functionality with smooth animations

### 🎛️ **Advanced Filtering System**
- **Week Filter**: Filter by reporting week
- **Project Filter**: Select specific projects  
- **Project Manager Filter**: Filter by assigned manager
- **Project Type Filter**: Filter by project category
- Real-time filtering with instant results

### 🎯 **Health Status Indicators**
- **Green**: On Track - Project progressing as planned
- **Yellow**: At Risk - Potential issues identified  
- **Red**: Critical - Immediate attention required
- Interactive tooltips with detailed status comments

### 📑 **Comprehensive Project Details**
When expanded, each project shows tabbed interface:

- **📊 Summary Tab**: Executive summary, achievements, planned activities, effort metrics
- **🎯 Milestones Tab**: Project milestones with dates and status tracking
- **⚠️ Risks Tab**: Identified risks with probability and mitigation status
- **🚨 Issues Tab**: Current issues with priority and assignment
- **📈 Status History Tab**: Historical status tracking over time

### 📈 **Visual Progress Tracking**
- **Effort Utilization**: Visual progress bar showing actual vs planned effort
- **Time Elapsed**: Timeline progress with percentage completion
- **Progress Metrics**: Real-time calculations and visual indicators

## 🛠️ Technology Stack

### **Frontend**
- **React 18.3.1**: Modern hooks-based architecture
- **Tailwind CSS**: Utility-first styling with ServiceNow design tokens
- **Radix UI**: Accessible, professional UI components
- **Lucide React**: Clean, consistent iconography

### **Backend/Platform**
- **ServiceNow Fluent DSL**: Metadata definition and deployment
- **ServiceNow SDK 4.1.0**: Build and deployment tooling
- **UI Pages**: ServiceNow user interface framework

### **Development**
- **Vite**: Fast development server with hot reload
- **TypeScript**: Type-safe development experience
- **ESLint**: Code quality and consistency

## 🚀 Quick Start

### **Prerequisites**
- Node.js (16+)
- ServiceNow developer instance
- Git

### **Local Development**

1. **Clone Repository**
   ```bash
   git clone https://github.com/ikochetkov/status-report-viewer.git
   cd status-report-viewer
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Opens `http://localhost:3000` with hot reload enabled

4. **Make Changes**
   - Edit files in `src/client/`
   - See changes instantly in browser
   - No need to refresh or rebuild

### **ServiceNow Deployment**

1. **Build Application**
   ```bash
   npm run build
   ```

2. **Deploy to ServiceNow**  
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
status-report-viewer/
├── 📄 README.md                    # This documentation
├── 📦 package.json                 # Dependencies and scripts
├── ⚙️ now.config.json              # ServiceNow configuration
├── 🔨 vite.config.js               # Vite build configuration
├── 🌳 .gitignore                   # Git ignore patterns
├── 📂 src/
│   ├── 🎨 client/                  # React frontend code
│   │   ├── 🏠 index.html           # HTML entry point
│   │   ├── 🚀 main.jsx             # React bootstrapper  
│   │   ├── 📱 app.jsx              # Main application component
│   │   ├── 🎨 app.css              # Tailwind CSS styles
│   │   └── 📂 components/          # React components
│   │       ├── StatusFilters.jsx   # Filter controls
│   │       ├── StatusReportsTable.jsx  # Main table
│   │       ├── ProjectDetails.jsx  # Tabbed detail view
│   │       ├── StatusIndicator.jsx # Status badges
│   │       └── 📂 ui/              # Reusable UI components
│   ├── ⚡ fluent/                  # ServiceNow Fluent DSL
│   │   ├── index.now.ts           # Fluent entry point
│   │   └── 📂 ui-pages/           # UI Page definitions
│   └── 🔧 server/                 # Server-side scripts
```

## 🎯 Current Data Structure

The application currently uses hardcoded mock data that matches your payload structure:

```javascript
{
  number: "PRJSTAT0011059",
  project: "89d1907ec3497ad0ad36b9ff0501311d", 
  project_number: "PRJ0002737",
  short_description: "ServiceNow SPM Implementation for Mobiz",
  project_manager: "Igor Kochetkov",
  // ... full data structure matches your requirements
}
```

## 🔄 Development Workflow

### **Making Changes**

1. **Develop Locally** (Recommended)
   ```bash
   npm run dev  # Hot reload development
   ```

2. **Build & Test**
   ```bash
   npm run build
   ```

3. **Deploy to ServiceNow**
   ```bash  
   npm run deploy
   ```

### **Git Workflow**

1. **Make Changes**: Edit code locally or in ServiceNow environment
2. **Commit Changes**: 
   ```bash
   git add .
   git commit -m "Your changes description"
   git push
   ```

## 🎨 Customization

### **Adding New Filters**
Edit `src/client/components/StatusFilters.jsx` to add more filter options.

### **Modifying Table Layout**  
Update `src/client/components/StatusReportsTable.jsx` for table structure changes.

### **Changing Styling**
Modify `src/client/app.css` with Tailwind CSS classes and ServiceNow design tokens.

### **Adding New Tabs**
Extend `src/client/components/ProjectDetails.jsx` to include additional detail tabs.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] **Real ServiceNow Data Integration**: Replace hardcoded data with Table API
- [ ] **User Authentication**: Implement ServiceNow user context  
- [ ] **Export Functionality**: PDF/Excel export capabilities
- [ ] **Advanced Analytics**: Charts and trend analysis
- [ ] **Mobile Responsiveness**: Enhanced mobile experience
- [ ] **Custom Themes**: Multiple color schemes
- [ ] **Performance Optimization**: Lazy loading and caching

## 🔧 Troubleshooting

### **Build Issues**
- Ensure all dependencies are installed: `npm install`
- Check ServiceNow SDK version compatibility
- Verify file paths and imports

### **Deployment Issues**  
- Confirm ServiceNow instance connection
- Check application scope configuration
- Verify UI Page permissions

### **Styling Issues**
- Ensure Tailwind CSS classes are properly applied
- Check CSS variable definitions
- Verify ServiceNow design token imports

## 📞 Support

- **🐛 Issues**: [GitHub Issues](https://github.com/ikochetkov/status-report-viewer/issues)
- **📖 ServiceNow Docs**: [ServiceNow Developer Portal](https://developer.servicenow.com)
- **⚛️ React Docs**: [React Documentation](https://react.dev)

---

## 📄 License

This project is licensed under the UNLICENSED License - see the package.json file for details.

---

**🎉 Built with ❤️ using ServiceNow Fluent DSL and React**

*Ready for production use and further customization!*