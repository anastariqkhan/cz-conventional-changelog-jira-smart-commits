var conventionalCommitTypes = require('./types');
var workflowTransitions = require('./transitions');

module.exports = {
  types: conventionalCommitTypes,
  jiraMode: true,
  skipScope: false,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  jiraPrefix: 'DAZ',
  jiraOptional: false,
  transitions: workflowTransitions
};
