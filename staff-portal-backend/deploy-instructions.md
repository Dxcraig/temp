# Deploy to Render - Step by Step Instructions

## Prerequisites
1. Push your backend code to GitHub repository
2. Make sure your package.json has the "start" script: `"start": "node ./src/server.js"`

## Deployment Steps

### 1. Create Render Account
- Go to [render.com](https://render.com)
- Sign up with your GitHub account

### 2. Create New Web Service
1. Click "New +" button in Render dashboard
2. Select "Web Service"
3. Connect your GitHub repository
4. Select your repository

### 3. Configure Service Settings
- **Name**: `khms-staff-portal-backend` (or your preferred name)
- **Root Directory**: `staff-portal-backend` (if your backend is in a subdirectory)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 4. Environment Variables
Add these environment variables in Render dashboard:
- `NODE_ENV`: `production`
- Any other environment variables your app needs (database URLs, JWT secrets, etc.)

### 5. Deploy
- Click "Create Web Service"
- Render will automatically build and deploy your app
- Your backend will be available at: `https://your-app-name.onrender.com`

## After Deployment

### Update Frontend Configuration
1. Copy your Render backend URL (e.g., `https://khms-staff-portal-backend.onrender.com`)
2. Update your frontend environment variables:
   - In AWS Amplify: Set `VITE_API_BASE_URL` to your Render URL
   - In your local `.env.production`: Update the URL

### Update CORS (if needed)
If you have a custom domain or different Amplify URL, update the CORS origins in server.js

## Useful Render Features
- **Auto-deploy**: Automatically deploys when you push to GitHub
- **Logs**: View real-time logs in Render dashboard
- **Health checks**: Render automatically monitors your app
- **SSL**: Free SSL certificates included

## Troubleshooting
- Check logs in Render dashboard if deployment fails
- Ensure all dependencies are in package.json
- Verify start script is correct
- Check environment variables are set properly
