const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { pathToApiDirectory } = require('../constants');

module.exports = function runCommand(command) {
    return new Promise(async(resolve, reject) => {
        try {
            const {stdout, stderr} = await exec(command, {cwd: pathToApiDirectory});
            
            if (stderr !== '') {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        } catch (err) {
            reject(err);
        }
    });
};
