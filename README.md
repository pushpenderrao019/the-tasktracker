# Task Tracker - Personal Task Management Tool

A modern, fully-featured task management application built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive solution for managing personal tasks with features like priority levels, due dates, tags, search functionality, sorting options, and dark mode support.

## 🚀 Features

### 🔐 Authentication
- Simple username-based login system
- Auto-redirect to dashboard for logged-in users
- Secure logout functionality with local storage cleanup

### 📋 Task Management
- **Create Tasks**: Add tasks with title, description, priority, due date, and tags
- **Edit Tasks**: Inline editing with modal interface
- **Delete Tasks**: Custom confirmation dialog for safe deletion
- **Toggle Completion**: Mark tasks as complete/incomplete
- **Priority Levels**: High (Red), Medium (Yellow), Low (Green)
- **Due Dates**: Visual indicators for overdue tasks
- **Tags System**: Organize tasks with custom tags

### 🔍 Advanced Filtering, Search & Sorting
- **Filter Tabs**: All, Completed, Pending with task counts
- **Live Search**: Real-time filtering by title or description
- **Sort Options**: Sort by Created Date, Due Date, or Priority
- **Combined Filtering**: Search within filtered and sorted results

### 🎨 User Experience
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Responsive Design**: Optimized for mobile and desktop
- **Smooth Animations**: Framer Motion powered transitions
- **Visual Feedback**: Hover effects, loading states, and micro-interactions
- **Custom Dialogs**: Native-looking confirmation dialogs
- **Accessibility**: Keyboard navigation and color contrast compliance

### 💾 Data Persistence
- **Local Storage**: All data stored locally in browser
- **No Backend Required**: Fully client-side application
- **Theme Persistence**: Dark mode preference saved
- **User Session**: Username stored for personalized experience

## 🛠️ Technologies Used

- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing
- **Shadcn/UI** - Modern UI components
- **Radix UI** - Accessible component primitives
- **UUID** - Unique identifier generation
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
task-tracker/
├── public/
│   ├── assets/
│   │   ├── cover.png                # Project cover image
│   │   └── notasks.png             # No tasks illustration
│   └── tasktracker.png             # Application logo
├── src/
│   ├── components/
│   │   ├── ui/                     # Shadcn/UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   ├── Dashboard.tsx           # Main dashboard with header and layout
│   │   ├── DarkModeToggle.tsx      # Theme toggle component
│   │   ├── Login.tsx               # Authentication component
│   │   ├── TaskFilter.tsx          # Filter tabs component
│   │   ├── TaskForm.tsx            # Add/edit task modal
│   │   ├── TaskItem.tsx            # Individual task component
│   │   ├── TaskList.tsx            # Task list container
│   │   ├── TaskSearch.tsx          # Search functionality
│   │   └── TaskSort.tsx            # Sort dropdown component
│   ├── context/
│   │   └── ThemeContext.tsx        # Dark mode context provider
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notifications hook
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn helper)
│   ├── pages/
│   │   ├── Index.tsx               # Index page (redirects)
│   │   └── NotFound.tsx            # 404 error page
│   ├── styles/
│   │   └── index.css               # Global styles and animations
│   ├── utils/
│   │   └── localStorage.ts         # Local storage utilities
│   ├── App.css                     # Additional app styles
│   ├── App.tsx                     # Main app component with routing
│   ├── index.css                   # Base Tailwind CSS imports
│   ├── main.tsx                    # App entry point
│   └── vite-env.d.ts              # Vite environment types
├── .gitignore                      # Git ignore rules
├── components.json                 # Shadcn/UI configuration
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Locked dependency versions
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Project documentation
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.app.json              # TypeScript app configuration
├── tsconfig.json                  # Main TypeScript configuration
├── tsconfig.node.json             # TypeScript Node configuration
└── vite.config.ts                 # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/pushpenderrao019/the-tasktracker>
   cd the-tasktracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun run build
```

The built files will be in the `dist` directory.

## 📱 Usage

### Getting Started
1. **Login**: Enter any username to access the dashboard
2. **Add Tasks**: Click "Add Task" to create your first task
3. **Manage Tasks**: Use the edit and delete buttons on each task
4. **Filter & Search**: Use the filter tabs and search box to find specific tasks
5. **Sort Tasks**: Use the sort dropdown to organize by date or priority
6. **Toggle Theme**: Click the theme toggle button for dark mode

### Task Properties
- **Title**: Required field for task identification
- **Description**: Optional detailed description
- **Priority**: High, Medium, or Low (affects color coding)
- **Due Date**: Optional deadline with overdue indicators
- **Tags**: Comma-separated labels for organization
- **Status**: Complete or incomplete with visual indicators

### Keyboard Shortcuts
- **Enter**: Submit forms
- **Escape**: Close modals
- **Tab**: Navigate between form fields

## 🎨 Design Features

### Visual Indicators
- **Priority Colors**: Red (High), Yellow (Medium), Green (Low)
- **Completion Status**: Strikethrough and faded appearance
- **Overdue Tasks**: Red border and warning indicators
- **Task Counts**: Dynamic counts in filter tabs

### Animations
- **Page Transitions**: Smooth route changes
- **Task Operations**: Fade in/out animations
- **Form Interactions**: Scale and hover effects
- **Theme Switching**: Smooth color transitions

### Responsive Design
- **Mobile-First**: Optimized for small screens
- **Adaptive Layouts**: Buttons reorganize on screens < 600px
- **Touch-Friendly**: Appropriately sized interactive elements
- **Flexible Navigation**: Header adapts to screen size

## 🔧 Configuration

### Environment Variables
No environment variables required - the application runs entirely in the browser.

### Storage Format
Tasks are stored in localStorage with the following structure:

```json
{
  "id": "unique-identifier",
  "title": "Task title",
  "description": "Optional description",
  "completed": false,
  "createdAt": "2025-07-03T12:00:00.000Z",
  "priority": "Medium",
  "dueDate": "2025-07-10",
  "tags": ["work", "urgent"]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for smooth animations
- **React Team** for the excellent framework
- **Shadcn/UI** for beautiful component library
- **Radix UI** for accessible primitives

## 📞 Support

If you encounter any issues or have questions, please [open an issue](../../issues) on GitHub.

---

**Happy Task Managing!** 🎯
