const { execSync } = require('child_process');

const stripNewLineEndings = sha => sha.replace('\n', '');

const HEAD_SHA = stripNewLineEndings(execSync(`git rev-parse HEAD`, { encoding: 'utf-8' }));
process.stdout.write('#_');
process.stdout.write(HEAD_SHA);
process.stdout.write('_%');
