const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const provider = core.getInput('provider') || 'openai';
    const model = core.getInput('model') || 'o4-mini';
    const zapcircleVersion = core.getInput('zapcircleVersion') || 'latest';
    const baseUrl = core.getInput('baseUrl') || '';

    const env = {
      ...process.env,
      OPENAI_API_KEY: core.getInput('OPENAI_API_KEY') || process.env.OPENAI_API_KEY,
      ANTHROPIC_API_KEY: core.getInput('ANTHROPIC_API_KEY') || process.env.ANTHROPIC_API_KEY,
      GOOGLE_API_KEY: core.getInput('GOOGLE_API_KEY') || process.env.GOOGLE_API_KEY,
    };

    let cmd = `npx zapcircle@${zapcircleVersion} review --provider=${provider} --model=${model}`;
    if (baseUrl) cmd += ` --baseUrl=${baseUrl}`;

    await exec.exec(cmd, [], { env });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();