# Front-End of Actionable Gamified Development Application

This is the front-end portion of the **Actionable Gamified Development Application**. It is built using **React**, with **React Router** for navigation, **CSS modules** for styling, and **Vite** as the build tool. The goal of the front-end is to provide an interactive and user-friendly experience for junior full-stack developers, helping them progress to senior-level developers through various challenges, projects, and learning paths.

## Front-End Technologies

### **React**
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently.

- **Components**: Each page or section of the app is built as a reusable React component.
- **State Management**: We use React’s `useState` and `useEffect` hooks to manage component state and handle side effects.
- **Props**: Data is passed between components via props, allowing for a modular and maintainable codebase.

### **React Router**
React Router is used to manage routing within the application. It allows users to navigate between different pages such as the **Dashboard**, **Projects**, **Challenges**, **Learning Paths**, and more without reloading the page.

- **Routes**: The application uses dynamic routing to serve various pages based on the user’s interaction.
- **Switch/Routes**: The application structure uses the `Routes` component (React Router v6+) to define different paths.

### **CSS Modules**
We use CSS modules for styling individual components, ensuring that styles are scoped locally by default and preventing clashes with global styles.

- **Component-Specific Styles**: Each component has its own `.css` file where styles are defined and imported within the component. For example, `LearningPath.css` defines the layout and design for the **LearningPath** component.

### **Vite**
Vite is used as the build tool for the front-end. It offers fast development builds and optimizes the production build efficiently.

- **Hot Reloading**: Vite provides near-instant hot reloading for rapid development.
- **Optimized for Modern JavaScript**: Vite bundles and serves modern ES6+ code, making the development environment faster and smoother.

## Front-End File Structure

The front-end application follows a modular structure, with each page/component stored in its own folder along with its respective CSS and any other assets.


