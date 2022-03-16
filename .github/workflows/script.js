const { context } = require('@actions/github');

process.stdout.write('\n');
process.stdout.write(context.eventName);
process.stdout.write('\n');
process.stdout.write(JSON.stringify(context, null, 2));
process.stdout.write('\n');
process.stdout.write(JSON.stringify(context.repo, null, 2));
process.stdout.write('\n');
process.stdout.write(JSON.stringify(context.repository, null, 2));
