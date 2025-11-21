# KTA PMII Backend (minimal)

This folder contains a minimal Express backend used for deployment checks and a health endpoint.

Files
- `index.js` — minimal server with `/health` and `/`.
- `.env.example` — example environment variables.

Run locally

```bash
cd kta-backend
npm install express cors dotenv
node index.js
```

Deploy
- Render: create a Web Service, point Root Directory to `kta-backend`, Build: `npm install`, Start: `node index.js`.
- Set `DATABASE_URL`, `JWT_SECRET`, and `ADMIN_CREATION_SECRET` in service environment variables.

After deploy, check `https://<service-url>/health` to verify the service is up.
