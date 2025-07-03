const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const provider = core.getInput('provider') || 'openai';
    const model = core.getInput('model') || 'o4-mini';
    const zapcircleVersion = core.getInput('zapcircleVersion') || 'latest';
    const baseUrl = core.getInput('baseUrl') || '';
a
    const env = {
      ...process.env
    };

    let cmd = `npx zapcircle@${zapcircleVersion} review --provider=${provider} --model=${model}`;
    if (baseUrl) cmd += ` --baseUrl=${baseUrl}`;

    await exec.exec(cmd, [], { env });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();