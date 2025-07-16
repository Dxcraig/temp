// Environment configuration
const config = {
  development: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
  },
  production: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://khms-staff-portal-backend.onrender.com'
  }
};

// Determine environment
const getEnvironment = () => {
  if (import.meta.env.MODE === 'development' || window.location.hostname === 'localhost') {
    return 'development';
  }
  return 'production';
};

const environment = getEnvironment();
export const API_BASE_URL = config[environment].API_BASE_URL;

// Log current configuration (remove in production)
console.log(`Environment: ${environment}`);
console.log(`API Base URL: ${API_BASE_URL}`);

export default config[environment];
