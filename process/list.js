const fs = require('fs');

// Read the ecosystem.json file
fs.readFile('../ecosystem.json', 'utf8', (err, data) => {

    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    let partners = [];
    try {
        const ecosystem = JSON.parse(data);
        const projects = Object.keys(ecosystem);

        console.log('List of projects:');
        projects.forEach((project) => {
            partners.push(project);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
    console.log(partners.join('\n'));
});