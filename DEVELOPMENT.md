# 🛠️ Development Guide

Guidelines and best practices for developing and maintaining this portfolio website.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Architecture](#project-architecture)
3. [Code Style & Conventions](#code-style--conventions)
4. [Component Development](#component-development)
5. [Styling Guidelines](#styling-guidelines)
6. [Performance Optimization](#performance-optimization)
7. [Git Workflow](#git-workflow)
8. [Common Tasks](#common-tasks)
9. [Debugging](#debugging)
10. [Contributing](#contributing)

---

## Getting Started

### Initial Setup

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio_website.git
cd portfolio_website

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173/
```

### Required Tools
- **Node.js** v14+ (v18+ recommended)
- **npm** v6+ or **yarn**
- **Git**
- **VS Code** (recommended) with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier
  - ESLint
  - Thunder Client (for testing APIs)

---

## Project Architecture

### Component Hierarchy

```
App (Main Container)
├── Navbar (Navigation)
├── Hero (Landing Section)
├── Main Content
│   ├── About (About Me)
│   ├── Projects (Project Showcase)
│   ├── Skills (Skills Section)
│   ├── Resume (Experience)
│   └── Contact (Contact Form)
└── Footer (Footer)
```

### File Organization

```
src/
├── components/          # Reusable components
│   ├── ComponentName.jsx
│   └── ComponentName.css
├── App.jsx             # Main app component
├── App.css             # App styles
├── index.css           # Global styles
└── main.jsx            # React entry point
```

### State Management

- **Local State**: Used for form data, UI toggles
- **Props**: Used for passing data between components
- **No Global State Manager**: Simple project doesn't require Redux/Context

---

## Code Style & Conventions

### JavaScript/React

```javascript
// ✅ Good: Functional components with hooks
export default function MyComponent({ prop1, prop2 }) {
  const [state, setState] = useState('initial');
  
  return (
    <div className="my-component">
      Content here
    </div>
  );
}

// ❌ Avoid: Class components or non-descriptive names
class Comp extends React.Component { ... }

// ✅ Good: Descriptive prop names
function Button({ onClick, children, disabled }) { ... }

// ❌ Avoid: Single letter or unclear names
function Btn({ fn, txt, dis }) { ... }
```

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `UserProfile`, `ContactForm` |
| Variables | camelCase | `isLoading`, `userName` |
| Constants | UPPER_SNAKE_CASE | `MAX_ATTEMPTS`, `DEFAULT_TIMEOUT` |
| CSS Classes | kebab-case | `.my-component`, `.primary-button` |
| Files | Filename same as component | `UserProfile.jsx` |

### Code Formatting

```javascript
// ✅ Good: Proper spacing and indentation
const handleClick = () => {
  setState(prev => ({
    ...prev,
    isOpen: !prev.isOpen
  }));
};

// ✅ Good: Consistent imports
import { useState, useEffect } from 'react';
import './Component.css';

// ❌ Avoid: Inconsistent formatting
const func=()=>{setState(x)}

// ❌ Avoid: Mixed import styles
import React, { useState } from 'react'
import { something } from './file'
```

### Comments

```javascript
// ✅ Good: Explain WHY, not WHAT
// Load user data on component mount to ensure fresh data
useEffect(() => {
  fetchUserData();
}, []);

// ✅ Good: Clear section comments
// ========================
// Form Submission Handler
// ========================

// ❌ Avoid: Obvious comments
// Set state to false
setState(false);

// ❌ Avoid: Commented out code
// const oldFunction = () => { ... };
```

---

## Component Development

### Creating a New Component

1. **Create component file** in `src/components/`
```javascript
// src/components/NewComponent.jsx
import './NewComponent.css';

export default function NewComponent({ prop1, prop2 }) {
  return (
    <section className="new-component">
      {/* Content */}
    </section>
  );
}
```

2. **Create stylesheet**
```css
/* src/components/NewComponent.css */
.new-component {
  /* styles */
}
```

3. **Import in parent**
```javascript
import NewComponent from './components/NewComponent';

// Use in JSX
<NewComponent prop1="value" prop2={data} />
```

### Component Best Practices

```javascript
// ✅ Good: Single responsibility
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

// ✅ Good: Prop validation through naming
function Button({ onClick, className, children, disabled }) {
  // Clear purpose of each prop

// ✅ Good: Using default parameters
function Component({ title = 'Default', count = 0 }) {
  return <h1>{title}: {count}</h1>;
}

// ❌ Avoid: Multiple responsibilities
function ProjectCardWithModal({ project, onEdit, onDelete }) {
  // Too many concerns in one component
}

// ❌ Avoid: Deeply nested JSX
return (
  <div>
    <div>
      <div>
        <Component /> {/* 3 levels deep */}
      </div>
    </div>
  </div>
);
```

### Props Patterns

```javascript
// ✅ Good: Destructure props
function Component({ name, age, email }) {
  return <div>{name} - {age} - {email}</div>;
}

// ✅ Good: Default values
function Component({ 
  title = 'Default Title',
  size = 'medium' 
}) { ... }

// ❌ Avoid: Passing entire object
function Component(props) {
  return <div>{props.name}</div>; // Not destructured
}

// ❌ Avoid: Missing defaults
function Component({ required, optional }) {
  // If optional is undefined, may cause issues
}
```

---

## Styling Guidelines

### CSS Organization

```css
/* 1. Layout & Structure */
.component {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 2. Sizing */
.component {
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 30px;
}

/* 3. Colors & Appearance */
.component {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

/* 4. Typography */
.component {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

/* 5. Interactions */
.component:hover {
  background: var(--light-bg);
  transform: translateY(-2px);
}
```

### CSS Variables

```css
/* ✅ Good: Use CSS variables for consistency */
:root {
  --primary-color: #6366f1;
  --transition: all 0.3s ease;
}

.button {
  background: var(--primary-color);
  transition: var(--transition);
}

/* ❌ Avoid: Hardcoded colors */
.button {
  background: #6366f1;
  transition: all 0.3s ease;
}
```

### Responsive Design

```css
/* ✅ Good: Mobile-first approach */
.component {
  width: 100%;
  padding: 10px;
}

@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: 20px;
  }
}

/* ❌ Avoid: Desktop-first */
.component {
  width: 50%;
}

@media (max-width: 768px) {
  .component {
    width: 100%;
  }
}
```

### Utility Classes

Use global CSS classes for common patterns:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
}
```

---

## Performance Optimization

### Code Splitting

```javascript
// ✅ Good: Lazy load heavy components
import { lazy, Suspense } from 'react';

const ProjectCard = lazy(() => import('./ProjectCard'));

function ProjectList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectCard />
    </Suspense>
  );
}
```

### Memoization

```javascript
// ✅ Good: Memoize expensive computations
import { useMemo } from 'react';

function Component({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);
  
  return <div>{sortedItems}</div>;
}
```

### Callbacks

```javascript
// ✅ Good: Memoize callbacks used in child props
import { useCallback } from 'react';

function Parent() {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return <Child onClick={handleClick} />;
}
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build

# Check what's in dist/
ls -lh dist/assets/

# Expected sizes:
# - CSS: ~18 KB
# - JS: ~206 KB
# - Total gzipped: ~68 KB
```

---

## Git Workflow

### Branch Structure

```
main                  # Production-ready code
  └── develop        # Development branch (if needed)
      ├── feature/navbar
      ├── feature/projects
      └── fix/contact-form
```

### Commit Messages

```bash
# ✅ Good: Clear, descriptive messages
git commit -m "Add responsive navbar with hamburger menu"
git commit -m "Fix contact form validation"
git commit -m "Optimize bundle size to 206KB"

# ❌ Avoid: Vague messages
git commit -m "Update stuff"
git commit -m "Fix bug"
git commit -m "Changes"
```

### Workflow Example

```bash
# 1. Create feature branch
git checkout -b feature/new-section

# 2. Make changes
# ... edit files ...

# 3. Stage and commit
git add .
git commit -m "Add new section with components and styles"

# 4. Push to GitHub
git push origin feature/new-section

# 5. Create Pull Request
# - Go to GitHub
# - Create PR from feature/new-section to main
# - Add description
# - Request review (if working with team)

# 6. Merge when ready
git checkout main
git pull origin main
git merge feature/new-section
git push origin main

# 7. Delete feature branch
git branch -d feature/new-section
git push origin --delete feature/new-section
```

---

## Common Tasks

### Adding a New Project

1. **Update `Projects.jsx`**
```javascript
const projects = [
  {
    id: 5,
    title: 'New Project',
    date: '2024',
    description: 'Description of project',
    tech: ['React', 'JavaScript'],
    github: 'https://github.com/...',
    demo: 'https://...'
  },
  // ... other projects
];
```

2. **Test locally**
```bash
npm run dev
# Check that project appears correctly
```

### Updating Resume/Experience

1. **Edit `Resume.jsx`**
```javascript
const experience = [
  {
    role: 'New Role',
    company: 'Company Name',
    period: '2024 - Present',
    responsibilities: [
      'Task 1',
      'Task 2'
    ]
  }
];
```

2. **Update styling if needed** in `Resume.css`

### Customizing Colors

1. **Update CSS variables** in `src/index.css`
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #another-color;
}
```

2. **All components automatically use new colors**

### Changing Content

1. **Hero Section**: Edit `Hero.jsx`
2. **About Section**: Edit `About.jsx`
3. **Contact Methods**: Edit `Contact.jsx`
4. **Footer Links**: Edit `Footer.jsx`

---

## Debugging

### Console Logging

```javascript
// ✅ Good: Organized logging
console.log('Component mounted:', componentName);
console.error('Error fetching data:', error);
console.warn('Deprecated method used');

// ❌ Avoid: Random logging
console.log('test');
console.log(data);
```

### React DevTools

```bash
# Install React DevTools browser extension
# Chrome: React Developer Tools
# Firefox: React Developer Tools

# Features:
# - Inspect component hierarchy
# - View/edit props and state
# - Track component renders
# - Identify performance issues
```

### Network Debugging

```
Chrome DevTools → Network tab
1. Reload page
2. Check requests
3. Look for failed requests (red)
4. Check response times
5. Verify asset sizes
```

### Performance Debugging

```
Chrome DevTools → Performance tab
1. Click record
2. Interact with site
3. Stop recording
4. Analyze frame rate
5. Look for jank (drops below 60fps)
```

---

## Contributing

### Code Review Checklist

Before committing:

- [ ] Code follows style guide
- [ ] No console errors/warnings
- [ ] Component is accessible
- [ ] Responsive design tested
- [ ] Performance optimized
- [ ] No hardcoded values
- [ ] Comments added for complex logic
- [ ] Tests pass (if applicable)

### Pull Request Process

1. Create feature branch from `main`
2. Make changes with clear commits
3. Push to GitHub
4. Create Pull Request with:
   - Clear title
   - Description of changes
   - Before/after screenshots (if UI change)
   - Link to related issue
5. Wait for review
6. Merge to main

### Documentation

- Update README if adding features
- Update DEPLOYMENT_GUIDE if deployment changes
- Add comments for complex code
- Keep CHANGELOG updated

---

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Web.dev Best Practices](https://web.dev)

---

**Happy Developing! 🎉**
