const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium-min');

module.exports = async (req, res) => {
  console.log('chromium.executablePath:', await chromium.executablePath());
  res.status(200).json({
    execPath: await chromium.executablePath(),
    nodeEnv: process.env.NODE_ENV,
    nodeVer: process.version,
    platform: process.platform
  });
};
