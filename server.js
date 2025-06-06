const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
const miniappRoutes = require('./routes/miniapp');

app.use(cors());

// Serve static miniapp assets
app.use('/miniapp', express.static(path.join(__dirname, 'public/miniapps')));

// Extra routes
app.use('/miniapp', miniappRoutes);

// Serve other static assets (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Manifest route
app.get('/miniapp/:appId', (req, res) => {
  const { appId } = req.params;
  res.json({
    id: appId,
    displayName: "Sample Mini App",
    version: "v1",
    icon: "https://yourserver.com/icon.png",
    host: `${req.protocol}://${req.get('host')}`,
    requiredPermissions: ["CAMERA"],
  });
});

// Serve mini app index.html
app.get('/miniapp/:appId/:version/index.html', (req, res) => {
  const { appId, version } = req.params;
  const filePath = path.join(__dirname, 'public', 'miniapps', appId, version, 'index.html');
  res.sendFile(filePath);
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Mini App server is running at http://localhost:${port}`);
});
