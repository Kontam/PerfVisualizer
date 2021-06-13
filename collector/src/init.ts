import { outputJson } from 'fs-extra';
import { existsSync } from 'fs';
import { Target, PerfConfig } from './types';

(async function () {
  const CONFIG_PATH = 'collector/config.json';
  const TARGET_PATH = 'collector/target.json';

  const configTemplate: PerfConfig = {
    gitRoot: '',
    distDir: '',
  };

  const targetTemplate: Target[] = [{ name: '', path: '' }];
  if (existsSync(CONFIG_PATH)) {
    console.log('config.json is already exist.');
  } else {
    await outputJson(CONFIG_PATH, configTemplate);
    console.log(`template: ${CONFIG_PATH} is created.`);
  }
  if (existsSync(TARGET_PATH)) {
    console.log('target.json is already exist.');
  } else {
    await outputJson(TARGET_PATH, targetTemplate);
    console.log(`template: ${TARGET_PATH} is created.`);
  }
})();
