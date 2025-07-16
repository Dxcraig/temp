# Important Notes for Render Deployment

## Database Considerations
Your current setup uses SQLite with a local file database. **Important**: Render has an ephemeral filesystem, which means your database file will be reset on every deployment.

### Options for Production Database:

#### Option 1: Use Render PostgreSQL (Recommended)
1. Create a PostgreSQL database in Render
2. Update your code to use PostgreSQL instead of SQLite
3. Install `pg` package: `npm install pg`

#### Option 2: Use External Database Service
- **Supabase** (PostgreSQL - has free tier)
- **PlanetScale** (MySQL - has free tier)
- **MongoDB Atlas** (MongoDB - has free tier)

#### Option 3: Keep SQLite for Testing (Not Recommended for Production)
If you want to keep SQLite for now (data will be lost on redeploys):
- Your current setup will work
- Database will reset on every deployment
- Not suitable for production use

## Recommended Next Steps
1. Deploy to Render with current SQLite setup to test connectivity
2. Migrate to PostgreSQL for persistent data storage

## Environment Variables to Set in Render
- `NODE_ENV`: `production`
- `DATABASE_URL`: (if using external database)
- `JWT_SECRET`: (if you're using JWT tokens)
- Any other secrets your app needs
