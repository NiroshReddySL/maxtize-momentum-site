
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add some error handling to diagnose potential issues
try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Failed to find the root element');
    document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Could not find root element</div>';
  } else {
    console.log('Mounting React application...');
    createRoot(rootElement).render(<App />);
    console.log('React application mounted successfully');
  }
} catch (error) {
  console.error('Failed to mount React application', error);
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Failed to initialize the application. Please check the console for details.</div>';
}
