import axios from 'axios';

// For local development: Proxy to Vercel serverless functions (port 3001)
export const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Backend port 3000
  withCredentials: false // If using cookies/auth later
});