const fs = require('fs');
const { parse } = require('csv-parse/sync');
const axios = require('axios');
const path = require('path');

const csv = fs.readFileSync('process.csv', 'utf8').replace(/^\uFEFF/, '');

const records = parse(csv, {
    columns: true,
    skip_empty_lines: true
});

function getSubcategories(record, categories) {
    return categories.map(category => {
        switch (category) {
            case "DeFi":
                return ["DEX", "Lending", "Derivatives", "Payments", "RWA", "Insurance", "Perpetuals", "Liquidation", "Stablecoin", "Yield Aggregator", "Swap Aggregator", "LST", "Other"]
                    .filter(sub => record[`DeFi Subcategories (${sub})`] === 'true');
            case "NFT":
                return ["Marketplace", "Gaming", "DAO", "PFP", "Metaverse", "Art", "Music", "Collectibles", "Other"]
                    .filter(sub => record[`NFT Subcategories (${sub})`] === 'true');
            case "Gaming":
                return ["Play to Earn", "Play and Earn", "Gaming Focused", "NFT", "DAO", "Metaverse", "Marketplace", "Other"]
                    .filter(sub => record[`Gaming Subcategories (${sub})`] === 'true');
            case "Infrastructure":
                return ["Layer 1", "Layer 2", "Oracles", "Bridges", "Scalability", "Privacy", "Other"]
                    .filter(sub => record[`Infrastructure Subcategories (${sub})`] === 'true');
            case "Wallet":
                return ["Extension", "Mobile", "Hardware", "Other"]
                    .filter(sub => record[`Wallet Subcategories (${sub})`] === 'true');
            case "Analytics":
                return ["Data", "Charts", "Magazine", "Content Creator", "Other"]
                    .filter(sub => record[`Analytics Subcategories (${sub})`] === 'true');
            case "Social":
                return ["DAO", "Community", "Content Creator", "Marketing", "Education", "Hackathon", "Other"]
                    .filter(sub => record[`Social Subcategories (${sub})`] === 'true');
            case "Investor":
                return ["VC", "Angel", "Incubator", "Accelerator", "Other"]
                    .filter(sub => record[`Investor Subcategories (${sub})`] === 'true');
            case "Other":
                return ["Other"];
            default:
                return [];
        }
    })
}

async function downloadImage(url, folder, filename) {
    if (!url) return;

    const filePath = path.join(folder, filename);
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

const directories = ['../logo', '../banner', '../hero'];
directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

(async () => {
    const json = records.reduce((acc, record) => {
        const categories = record["Categories"].split(',').map(cat => cat.trim());
        const project = {
            description: record["Short Description (100 max characters)"],
            content: record["Project Page content (500 max characters)"],
            url: record["Project Website URL"],
            github: record["GitHub"],
            discord: record["Discord"],
            telegram: record["Telegram"],
            twitter: record["Twitter/X"],
            contact: record["Point of Contact"],
            slug: record["Slug"],
            keywords: record["Keywords"] ? record["Keywords"].split(',').slice(0, 5) : [],
            categories: categories,
            subcategories: getSubcategories(record, categories),
            languages: record["Languages"] ? record["Languages"].split(',').map(lang => lang.trim()) : [],
            tags: record["Tags"] ? record["Tags"].split(',').filter(tag => tag.trim() !== '') : []
        };

        acc[record["Project Name"]] = project;

        return acc;
    }, {});

    for (const record of records) {
        await downloadImage(record['Logo (200x200px)'], '../logo', `${record.Slug}.png`);
        await downloadImage(record['Banner (400x300px)'], '../banner', `${record.Slug}.png`);
        await downloadImage(record['Hero (1700x500px)'], '../hero', `${record.Slug}.png`);
    }

    fs.writeFileSync('processed.json', JSON.stringify(json, null, 2));
})();