# Status Report Viewer - Local Development Guide

## 🚀 Quick Start

### 1. Start Local Development Server
```bash
npm run dev
```

This will start a Vite development server at `http://localhost:3000` with:
- ✅ Hot Module Replacement (instant updates)
- ✅ Fast refresh for React components
- ✅ All your current styling and functionality
- ✅ Same data and components as deployed version

### 2. Make Changes
Edit any files in `src/client/` and see changes instantly:
- `src/client/app.jsx` - Main application
- `src/client/components/` - All React components
- `src/client/app.css` - Styling (Tailwind CSS)

### 3. Deploy Changes to ServiceNow
When you're satisfied with local changes:
```bash
npm run build
npm run deploy
```

## 📁 Development Structure

```
src/client/
├── app.jsx              # Main App component
├── app.css             # Complete Tailwind CSS styles
├── main.jsx            # React entry point
├── index.html          # Local development HTML
└── components/
    ├── StatusFilters.jsx
    ├── StatusReportsTable.jsx
    ├── StatusIndicator.jsx
    ├── ProjectDetails.jsx
    └── ui/
        ├── select.jsx
        ├── tabs.jsx
        ├── tooltip.jsx
        ├── switch.jsx
        ├── label.jsx
        └── utils.ts
```

## 🛠️ Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server |
| `npm run dev-build` | Build for local testing |
| `npm run preview` | Preview local build |
| `npm run build` | Build for ServiceNow deployment |
| `npm run deploy` | Deploy to ServiceNow instance |

## 💡 Development Tips

### Fast Local Development Workflow:
1. **Start dev server**: `npm run dev`
2. **Edit components** in `src/client/`
3. **See changes instantly** at `localhost:3000`
4. **Deploy when ready**: `npm run build && npm run deploy`

### Common Changes You Can Make:

#### 🎨 **Styling Changes**
- Edit `src/client/app.css` for global styles
- Modify Tailwind classes in components
- Adjust colors in CSS custom properties

#### 📊 **Data Structure Changes**
- Update `mockProjects` array in `app.jsx`
- Modify component props and interfaces
- Add new data fields or calculations

#### 🔧 **Component Changes**
- Add new features to existing components
- Create new components in `components/`
- Modify table columns or tab content

#### 🎯 **UI/UX Improvements**
- Adjust layouts and spacing
- Add new interactive elements
- Modify filtering logic or sorting

## 🔄 Sync Workflow

### Local Development → ServiceNow
1. Make changes locally
2. Test at `localhost:3000` 
3. When satisfied: `npm run build && npm run deploy`

### ServiceNow → Local Development
If you make changes directly in ServiceNow:
1. Use ServiceNow SDK sync tools
2. Or manually copy changes to local files

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### CSS Not Loading
- Check that `app.css` is imported in `main.jsx`
- Verify Tailwind classes are spelled correctly

### Component Errors  
- Check browser console for React errors
- Ensure all imports are correct
- Verify prop types match interfaces

## 📝 Development Notes

- **Hot Reload**: Changes appear instantly without page refresh
- **Same Data**: Uses identical hardcoded data as deployed version
- **Full Styling**: Complete Tailwind CSS system available
- **Component Library**: All Radix UI components configured
- **Fast Builds**: Vite provides sub-second build times

---

**Happy coding! 🚀** Make changes locally, see them instantly, deploy when ready.