const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixFiles(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            content = content.replace(/href%2c%20window\.location\.html/g, 'href, window.location.href');
            content = content.replace(/window\.location\.html/g, 'window.location.href');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed ${fullPath}`);
            }
        }
    }
}

fixFiles(path.join(__dirname, 'fooror.com'));
console.log('Done!');
