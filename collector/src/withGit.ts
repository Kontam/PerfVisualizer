import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import { runLightHouse } from './perf';
import { PerfConfig } from './types';
import { format } from 'date-fns';
import { synchronous } from './util/synchronous';

type Target = {
  name: string;
  path: string;
};

const CONFIG_DIR = 'collector';

(async () => {
  const CWD = process.cwd();
  const DATE_FORMAT = 'yyyyMMdd-hhmmss';
  const targetStr = readFileSync(`${CONFIG_DIR}/target.json`, 'utf8');
  if (typeof targetStr !== 'string') return console.error('error', targetStr);
  const target: Target[] = JSON.parse(targetStr);

  const configStr = readFileSync(`${CONFIG_DIR}/config.json`, 'utf8');
  if (typeof configStr !== 'string') return console.error('error', configStr);
  const config = JSON.parse(configStr) as PerfConfig;
  const distDir = config.distDir || '.';

  process.chdir(config.gitRoot);
  const gitLogResult = execSync(`git log | grep commit -m1`).toString();
  const lastCommitHash = gitLogResult.split(' ')[1].trim();

  const timeStamp = format(new Date(), DATE_FORMAT);

  process.chdir(CWD);
  console.log('target', target);

  const promises = target.map((t) => {
    return () =>
      runLightHouse(
        t.path,
        `${lastCommitHash}_${timeStamp}.json`,
        `${distDir}/${t.name}`
      );
  });
  synchronous(promises);
})();
