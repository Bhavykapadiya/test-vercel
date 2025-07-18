const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium-min');
const remoteExecutablePath = "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar";
module.exports = async (req, res) => {

  console.log('chromium.executablePath:', await chromium.executablePath(remoteExecutablePath));
  res.status(200).json({
    execPath: await chromium.executablePath(remoteExecutablePath),
    nodeEnv: process.env.NODE_ENV,
    nodeVer: process.version,
    platform: process.platform
  });
};
