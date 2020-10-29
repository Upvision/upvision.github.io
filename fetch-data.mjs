import fs from 'fs';
import axios from 'axios';

// ! Github Data
const ghKey = process.env.GHTOKEN
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
      Authorization: `bearer ${ ghKey }`
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
            "Authorization": `token ${ ghKey }`,
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

let finalData = data.organization.repositories.edges.map(edge => {
    return edge.node;
});

fs.writeFile('./data/githubData.json', JSON.stringify(finalData, null, 2), err => {
    if (err) throw err;
    console.log("Github Data written, succesfully!");
})

// ! Google calendar Data
const googleAuth = process.env.googleAuth
const calendarId = "rishi1998@gmail.com"

let now = new Date();
let nowp3 = new Date(now);
nowp3.setMonth(nowp3.getMonth() + 3);
if (nowp3.getDate() != now.getDate()) nowp3.setDate(0);

await axios({
    url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
    method: 'get',
    params: {
        key: `${ googleAuth }`,
        timeMax: `${ nowp3.toISOString() }`,
        timeMin: `${ now.toISOString() }`
    }
}).then(res => {
    fs.writeFile('./data/calendarData.json', JSON.stringify(res.data.items, null, 2), err => {
        if (err) throw err;
        console.log("Calendar Data written, succesfully!");
    })
});