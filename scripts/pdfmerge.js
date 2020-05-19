const { exec } = require("child_process");

module.exports = function(listOfInput, options) {
    command = `pdfunite ${listOfInput.join(' ')} ${options.output}`
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`${stdout}`);
    });
}