var path = require('path');
var getFile = require('../../get-file');
var run = require('../../run-solution');

exports.problem = getFile(path.join(__dirname, 'problem.md'));

exports.solution = getFile(path.join(__dirname, 'solution.md'));

exports.verify = function (args, cb) {
  run(args[0], function (err, result) {
    if (/pizza is wonderful/.test(result)) cb(true);
    else cb(false);
  });
};
