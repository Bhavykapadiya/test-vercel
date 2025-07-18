const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    execPath: chromium.executablePath,
    nodeEnv: process.env.NODE_ENV,
    nodeVer: process.version,
    platform: process.platform
  });
};
