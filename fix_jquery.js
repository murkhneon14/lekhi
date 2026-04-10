const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'cdn.prod.website-files.com') {
                fixFiles(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Fix jQuery 403
            content = content.replace(/https:\/\/d3e54v103j8qbb\.cloudfront\.net\/js\/jquery-3\.5\.1\.min\.dc5e7f18c82e8a\.js\?site=6916200346ddd8428d3d953b/g, 'https://code.jquery.com/jquery-3.5.1.min.js');
            content = content.replace(/integrity="[^"]+" crossorigin="anonymous"/g, ''); // remove integrity issues for altered scripts

            // if webflow script fails because of strict CORS on cdn.prod.website-files.com for their lazy load chunks:
            // The lazy chunks are locally available in cdn.prod.website-files.com/6916200346ddd8428d3d953b/js/
            // wait, no, they ARE NOT. But maybe if I can just intercept ... 
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed ${fullPath}`);
            }
        }
    }
}

fixFiles(path.join(__dirname, 'fooror.com'));
console.log('Done fixing HTML properties');
