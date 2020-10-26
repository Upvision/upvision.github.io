import fs from 'fs';
import axios from 'axios';

const key = process.env.GHTOKEN
const query = `
query OrgDetails {
    organization(login:"UpVision") {
        repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
            edges {
                node {
                    name
                    description
                    url
                    stargazers {
                        totalCount
                    }
                    openGraphImageUrl
                }
            }
        }
    }
}
`

let request = (await axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    headers: {
      Authorization: `bearer ${ key }`
    },
    data: {
      query: query
    }
})).data;

if (request.error) throw request.error;

let data = request.data;

await Promise.all(data.organization.repositories.edges.map(async (edge) => {
    edge.node.contributors = []

    let contributors = await axios({
        url: `https://api.github.com/repos/UpVision/${edge.node.name}/contributors`, 
        method: 'get',
        headers: {
            "Authorization": `token ${ key }`,
        }
    });

    contributors.data.forEach(contributor => {
        edge.node.contributors.push({
            'profileLink': contributor.url,
            'imageURL': contributor.avatar_url,
            'altTag': contributor.login
        })
    });
}));

fs.writeFile('./data/data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log("Data written, succesfully!");
})