var conventionalCommitTypes = require('./types');
var workflowTransitions = require('./workflows');

module.exports = {
  types: conventionalCommitTypes,
  jiraMode: true,
  skipScope: false,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  jiraPrefix: 'AK',
  jiraOptional: true,
  workflows: workflowTransitions
};
