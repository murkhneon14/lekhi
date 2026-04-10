const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'cdn.prod.website-files.com') { // don't go into cdns
                fixFiles(fullPath);
            }
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Fix unpkg
            content = content.replace(/(\.\.\/)+unpkg\.com\//g, 'https://unpkg.com/');
            // Fix googleapis
            content = content.replace(/(\.\.\/)+ajax\.googleapis\.com\//g, 'https://ajax.googleapis.com/');
            // Fix cloudfront
            content = content.replace(/(\.\.\/)+d3e54v103j8qbb\.cloudfront\.net\//g, 'https://d3e54v103j8qbb.cloudfront.net/');
            // Also revert just in case any cdn paths were still left matching
            content = content.replace(/(\.\.\/)+cdn\.prod\.website-files\.com\//g, 'https://cdn.prod.website-files.com/');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed ${fullPath}`);
            }
        }
    }
}

fixFiles(path.join(__dirname, 'fooror.com'));
console.log('Done fixing HTML/CSS/JS paths completely');
