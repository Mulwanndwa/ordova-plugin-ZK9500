var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-plugin-ZK9500', 'coolMethod', [arg0]);
};
