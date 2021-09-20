var fs = require('fs');

function checkExistsWithTimeout(filePath, timeout) {
    return new Promise(function (resolve, reject) {

        var timer = setTimeout(function () {
            watcher.close();
            reject(new Error('File did not exists and was not created during the timeout.'));
        }, timeout);

        fs.access(filePath, fs.constants.R_OK, function (err) {
            if (!err) {
                clearTimeout(timer);
                watcher.close();
                resolve();
            }
        });


        var dir = path.dirname(filePath);
        var basename = path.basename(filePath);
        var watcher = fs.watch(dir, function (eventType, filename) {
            if (eventType === 'rename' && filename === basename) {
                clearTimeout(timer);
                watcher.close();
                resolve();
            }

        });
    });
}

function readImage(req, res) {
    fs.readFile(req, function (err, data) {
        if (err) throw err; // Fail if the file can't be read.
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(data); // Send the file data to the browser.
        return res;
    });
}