const configure = (values) => {
    const fs = require("fs");
    const config = {docRoot: '/somewhere'};
    let key, stat;

    for (key in values) {
        config[key] = values[key];
    }

    try {
        stat = fs.statSync(config.docRoot);
        if(!stat.isDirectory()) {
            throw new Error("Is not valid.");
        }
    } catch(e) {
        console.log(`** ${config.docRoot} does not exist or is not a directory!! **`);
        return;
    }

    // ...check other values...
    return config;
}