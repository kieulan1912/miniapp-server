const express = require('express');
const router = express.Router();
const archiver = require('archiver');
const path = require('path');

// Metadata API
router.get('/metadata/:appId', (req, res) => {
  const appId = req.params.appId;

  if (appId === 'weather') {
    return res.json({
      appId: 'weather',
      version: '1.0.0',
      zipUrl: 'http://localhost:3000/miniapp/package/weather.zip',
      entry: 'index.html',
    });
  }

  res.status(404).json({ error: 'Mini App not found' });
});

// ZIP API
router.get('/package/:fileName', (req, res) => {
  if (req.params.fileName !== 'weather.zip') {
    return res.status(404).send('File not found');
  }

  const folderPath = path.join(__dirname, '../public/miniapps/com.example.miniapp1/weather');
  const archive = archiver('zip');
  
  res.set({
    'Content-Type': 'application/zip',
    'Content-Disposition': 'attachment; filename=weather.zip',
  });

  archive.directory(folderPath, false);
  archive.pipe(res);
  archive.finalize();
});

module.exports = router;
