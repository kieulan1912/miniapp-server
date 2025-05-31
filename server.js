const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files directly
app.use('/miniapp', express.static(path.join(__dirname, 'public/miniapps')));

// Return Mini App manifest (metadata)
app.get('/miniapp/:appId', (req, res) => {
  const { appId } = req.params;

  res.json({
    id: appId,
    displayName: "Sample Mini App",
    version: "v1",
    icon: "https://yourserver.com/icon.png", 
    host: `http://10.0.2.2:${port}`,
    requiredPermissions: ["CAMERA"],
  });
});

// Directly serve index.html from versioned folder
app.get('/miniapp/:appId/:version/index.html', (req, res) => {
  const { appId, version } = req.params;
  const filePath = path.join(__dirname, 'public', 'miniapps', appId, version, 'index.html');

  res.sendFile(filePath);
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Mini App server is running at http://localhost:${port}`);
});
