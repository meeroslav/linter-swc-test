const { execSync } = require('child_process');

const HEAD_SHA = execSync(`git rev-parse HEAD`, { encoding: 'utf-8' }).replace('\n', '');
process.stdout.write('#_');
process.stdout.write(HEAD_SHA);
process.stdout.write('_%');
