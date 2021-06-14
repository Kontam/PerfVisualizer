/*
import * as fs from 'fs';
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
*/
import * as fse from 'fs-extra';
const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

export async function runLightHouse(
  url: string,
  filename: string,
  dir = '.'
): Promise<void> {
  try {
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox'],
    });
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance'],
      port: chrome.port,
    };
    const runnerResult = await lighthouse(url, options);

    await fse.ensureDir(dir);

    const report = runnerResult.report;
    fs.writeFileSync(`${dir}/${filename}`, report);

    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log(
      'Performance score was',
      runnerResult.lhr.categories.performance.score * 100
    );
    await chrome.kill();
    return;
  } catch (e) {
    console.error(e);
  }
}
