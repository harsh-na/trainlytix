# Trainlytix Admin Portal

A comprehensive, enterprise-grade Admin Dashboard for managing and governing an end-to-end training ecosystem.

## Features

### Executive Dashboard
- **KPI Metrics**: Real-time overview of active batches, trainees, trainers, and completion rates
- **Compliance Status**: Track trainees on track, at risk, and in critical state
- **Batch Health Monitor**: Monitor batch progress, attendance, and health scores
- **Performance Distribution**: Visual representation of trainee performance across score ranges

### Operational Intelligence
- **Batch Health Monitor**: Progress, attendance trends, trainer assignments
- **Assessment Readiness**: Upcoming exams, configured vs pending assessments
- **Compliance Risks & Alerts**: Low attendance alerts, SLA violations, overdue assignments
- **Trainer Effectiveness Metrics**: Rating, sessions delivered, feedback scores
- **System Alerts**: Critical alerts, warnings, and informational messages

### Governance & Control
- **Recent Admin Actions**: Track all administrative actions with timestamps
- **Audit Logs**: Complete audit trail of all user actions and system events
- **Role-Based Access Control (RBAC)**: Manage user roles and permissions
- **System Configuration**: Control system-wide settings and preferences

### Management Sections
- **Batch Management**: Create and manage training batches
- **Trainee Management**: Manage trainee accounts and progress
- **Trainer Management**: Handle trainer assignments and performance
- **Course & Curriculum**: Create and manage courses and modules
- **Assessments Configuration**: Set up assessments and evaluation criteria
- **Attendance & Compliance**: Track attendance and enforce compliance policies
- **Feedback Management**: Review and manage feedback data
- **Automation & Notifications**: Configure automated workflows
- **GenAI Settings**: Manage AI-powered features
- **Reports & Dashboards**: Generate and view analytical reports

## Access

### Admin Login
- **Email**: `admin@trainlytix.io`
- **Password**: `admin123`

## Design Language

The Admin Portal follows the same design language as the trainee portal:

- **Theme**: Professional, enterprise-ready UI with neutral and dark corporate tones
- **Color Scheme**: 
  - Primary: Red (#EF4444) for admin-specific actions
  - Secondary: Slate tones for backgrounds and text
  - Status Colors: Green (success), Red (critical), Amber (warning), Blue (info)
- **Typography**: Outfit for headings, Manrope for body text
- **Components**: Card-based layout with data visualizations
- **Icons**: Lucide React icons for consistent UI
- **Responsive**: Desktop-first, fully responsive design

## Folder Structure

```
src/admin/
├── components/
│   ├── layout/
│   │   ├── AdminAppLayout.jsx       # Main layout wrapper
│   │   ├── AdminHeader.jsx          # Top navigation bar
│   │   └── AdminSidebar.jsx         # Left navigation sidebar
│   ├── KPICard.jsx                  # KPI metric cards
│   └── StatusBadge.jsx              # Status badge component
├── context/
│   └── AdminAuthContext.js          # Admin authentication context
├── lib/
│   └── mockData.js                  # Mock data for all admin features
├── pages/
│   ├── AdminDashboard.jsx           # Main dashboard
│   ├── AdminLogin.jsx               # Login page
│   ├── BatchManagement.jsx          # Batch management page
│   ├── TraineeManagement.jsx        # Trainee management page
│   ├── AuditLogs.jsx                # Audit logs page
│   ├── ReportsAndDashboards.jsx     # Reports page
│   ├── PlaceholderPage.jsx          # Template for other pages
│   └── index.js                     # Page exports
└── README.md                        # This file
```

## Key Components

### KPICard
Displays key performance indicators with icons, values, and trend indicators.

```jsx
<KPICard 
  label="Active Batches"
  value={6}
  Icon={BookOpen}
  tone="blue"
  change={{ text: "+2 this month", positive: true }}
/>
```

### StatusBadge
Shows status with color-coded badges and icons.

```jsx
<StatusBadge status="on_track" label="92 points" />
```

### Layout Components
- **AdminAppLayout**: Main layout with sidebar and header
- **AdminHeader**: Top navigation with search, alerts, and profile menu
- **AdminSidebar**: Collapsible sidebar with navigation items

## Authentication

Admin authentication is handled through `AdminAuthContext` which provides:
- `adminUser`: Current logged-in admin
- `login(email, password)`: Login function
- `logout()`: Logout function
- `ready`: Loading state for auth

## Mock Data

All mock data is defined in `src/admin/lib/mockData.js` including:
- KPI metrics
- Batch health data
- Assessment readiness
- Compliance risks
- Performance distribution
- Trainer metrics
- Workflow metrics
- Audit logs
- System alerts

## Future Enhancements

- Real-time data integration
- Advanced filtering and search
- Export reports (CSV, PDF)
- Real-time notifications
- Dashboard customization
- Advanced analytics and visualization
- Machine learning-based recommendations
- Integration with GenAI services

## Security

The admin portal includes:
- Role-based access control
- Audit logging of all actions
- Session management
- Secure password handling
- IP tracking for audit trails

## Support

For support inquiries, contact: `support@trainlytix.io`
