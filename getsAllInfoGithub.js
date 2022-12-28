#!/usr/bin/env node
const fetch = require('node-fetch')
const fs = require('fs')

const options = {
    'method' : 'get',
    'contentType': 'application/json',
    'headers': {
        Accept: 'application/vnd.github+json',
        Authorization: 'Bearer ' + process.argv[2],
        'X-GitHub-Api-Version': '2022-11-28'
    }
};
async function main() {
    const responseRepos = await fetch('https://api.github.com/users/Nathandelenclos/repos', options);
    const reposData = await responseRepos.json()
    for (let i = 0; i < reposData.length; i++) {
        const responseLanguages = await fetch(`https://api.github.com/repos/${reposData[i].full_name}/languages`, options);
        reposData[i].languages = await responseLanguages.json()
        const responseTags = await fetch(`https://api.github.com/repos/${reposData[i].full_name}/tags`, options)
        reposData[i].tags = await responseTags.json()
    }
    fs.writeFileSync('repos.json', JSON.stringify(reposData))
}
main()