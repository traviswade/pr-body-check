const core = require('@actions/core');
const github = require('@actions/github');

try {
  const ptn = core.getInput('ptn');
  console.log(`running pattern ${ptn}`);
  if(pr = github.context.payload.pull_request)
    if(pr.body.indexOf(ptn) == -1){
      console.log(`Pattern [${ptn}] NOT found:`)
      console.log(pr.body)
      core.setFailed(`PR body does not match ${ptn}.`)
    } else {
      console.log(`Pattern (${ptn}) found. Carry on.`)
    }
} catch (error) {
  core.setFailed(error.message);
}