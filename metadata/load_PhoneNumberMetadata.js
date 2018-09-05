const http = require('http'),
    https = require('https'),
    fs = require("fs"),
    url = require('url'),
    parseString = require('xml2js').parseString;


function loadXML(path) {
    const metaPath = url.parse(path);
    return new Promise((resolve, reject) => {
        if (metaPath.protocol.indexOf("http") !== 0) {
            fs.readFile(metaPath.href, 'utf8', (err, body) => {
                err ? reject() : resolve(body);
            });
        } else {
            (metaPath.protocol === "https:" ? https : http).get({
                host: metaPath.hostname,
                path: metaPath.path,
                port: metaPath.port
            }, (response) => {
                response.setEncoding("utf8")

                let body = "";
                response.on("data", chunk => body += chunk);
                response.on("end", () => resolve(body));
            }).on("error", reject);
        }
    });
}


module.exports = function load_PhoneNumberMetadata(path) {
    return new Promise((resolve, reject) => {
        path = path || "https://rawgit.com/googlei18n/libphonenumber/master/resources/PhoneNumberMetadata.xml";
        console.log(`Fetch: ${path}`);
        loadXML(path).then(xml => {
            console.log("Parsing ...");
            parseString(xml, function (err, result) {
                err ? reject() : resolve(result);
            });
        });
    });
}