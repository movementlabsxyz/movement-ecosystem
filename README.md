# Movement Ecosystem

## Description

Repository for the Movement Ecosystem projects. This aims to facilitate every project building on the ecosystem to have an easy and maintainable way to publish their information.

## How to Contribute

### Opening a Pull Request

You can make any changes you want and open a pull request from an account with public record of interacting with related altered data or has had identity confirmed by official channels. The maintainers will review your changes and merge them if they are good to go.
Refrain from altering unrelated files, as this will only make the review process longer.
Refrain from adding any sensitive or speculative information to the repository.

An example of a good pull request would be:

- ecosystem.json modification. It should be added to the end of the json file.

```json
{
    "Movement": {
        "description": "A description of my ecosystem",
        "content": "Movement Labs is bringing Move execution to new networks and environments. Our flagship products are M1 and M2. We are also building the Movement SDK, Movement CLI, Fractal, Hyperlane messaging infrastructure, and the Movement Shared Sequencer to provide paramount interoperability between our Move-based environments and other networks.",
        "url": "https://movementlabs.xyz",
        "github": "https://github.com/movementlabsxyz",
        "discord": "https://discord.gg/movementlabsxyz",
        "telegram": "https://t.me/movementlabsxyz",
        "twitter": "https://x.com/movementlabsxyz",
        "contact": "https://t.me/franciskthomas",
        "slug": "movement-labs",
        "keywords": [
            "movement",
            "labs",
            "ecosystem",
            "blockchain",
            "layer 1",
            "layer 2"
        ],
        "categories": ["DeFi"],
        "subcategories": [[
            "Other"
        ]],
        "languages": ["Solidity", "Sui", "Aptos"],
        "tags": [
            "Hiring Now",
            "Mainnet"
        ]
    }
}
```

- logo, banner and hero image addition to /logo, /banner and /hero. The images should be named after the project's slug and have a .png extension. Logo is shown on the project's card and page, banner is shown on the project's card and hero is shown on the project page.
- logo size: 200x200px
- banner size: 400x400px
- hero size: 1700x500px

Object key is the name of the project formatted and cased according to how it should be displayed across the website and the value is an object with the following properties (? indicates optional):

- description: A brief description of the project. Shown on the project's card and page.
- content: A more detailed description of the project. Shown on the project's page.
- url: The website of the project
- github?: The github repository of the project
- discord?: The discord server of the project
- telegram?: The telegram group of the project
- twitter?: X account of the project
- contact?: Direct contact link to a representative of the project
- slug: The preferred name of the project in lowercase, and hyphenated if necessary.
  - IMPORTANT: This is the name that will be used to reference the project when generating a URL for the project's page, and retrieving the project's logo and banner image.
- keywords?: An array of keywords that describe the project. This will be used to help users find the project. Maximum of 5 keywords.
- categories: The categories of the project. This will be used to help users find the project.
  - Available categories: "DeFi", "NFT", "Gaming", "Infrastructure", "Wallet", "Analytics", "Social", "Investor", "Other"
- subcategories: An array of subcategories that describe the project. They must match your specified categories. This will be used to help users find the project.
  - DeFi: "DEX", "Lending", "Derivatives", "Payments", "RWA", "Insurance", "Perpetuals","Liquidation", "Stablecoin", "Yield Aggregator", "Swap Aggregator", "LST", "Other"
  - NFT: "Marketplace", "Gaming", "DAO", "PFP", "Metaverse", "Art", "Music", "Collectibles", "Other"
  - Gaming: "Play to Earn", "Play and Earn", "Gaming Focused", "NFT", "DAO", "Metaverse", "Marketplace", "Other"
  - Infrastructure: "Layer 1", "Layer 2", "Oracles", "Bridges", "Scalability", "Privacy", "Other"
  - Wallet: "Extension", "Mobile", "Hardware", "Other"
  - Analytics: "Data", "Charts", "Magazine", "Content Creator", "Other"
  - Social: "DAO", "Community", "Content Creator", "Marketing", "Education", "Hackathon", "Other"
  - Investors: "VC", "Angel", "Incubator", "Accelerator", "Other"
  - Other:
- languages?: The main or closest languages to the project's smart contracts or supported languages.
  - Available languages: "Solidity", "Rust", "SuiMove", "AptosMove"
- tags?: An array of tags that describe the project. Tags are not selectable.
  - Available tags: "Hiring Now", "Bounty", "Mainnet", "Testnet", "Devnet"
