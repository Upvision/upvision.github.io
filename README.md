<a href="https://upvision.github.io">
  <p align="center">
      <img alt="UpVision" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </p>
  <h1 align="center">
    UpVision
  </h1>
</a>

Public repo for National Institute of Technology Delhi's Tech Club, UpVision's website, built with React and Gatsby with 💜.

Designed and built as part of hacktoberfest 2020 Online event, and the tech club's SWAT initiative.

The mentors for the project are,
1. Beeta Samad [@DumbSkull](https://github.com/DumbSkull) - Leader, Project head.
2. Rishikesh Anand [@Blakeinstein](https://github.com/Blakeinstein) - Repo manager, advisor.
3. Abhishek Kumar Suman [@aksuman055](https://github.com/aksuman055) - Content manager.
4. Prashant Chouhan [@Percy99](https://github.com/Percy99) - Technical advisor.


## 🚀 Quick start

1.  **Setup Gatsby CLI**

    The repository is built with yarnpkg and we suggest you use the same. however we understand that not everyone likes using yarn and are free to use npm instead. Alternatively, if you dont feel like installing gatsby globally, Just clone the repo and run gatsby commands by using scripts or npx.
    
    For yarn users,
    ```shell
    yarn add global gatsby-cli
    ```
    and for npm users,
    ```shell
    npm install -g gatsby-cli
    ```


2.  **Start developing.**

    Ideally you should fork the repository first, click the fork button at the top right corner.
    
    Clone the repository, and start developing. It is also suggested that feature implementations are to be implemented in a branch of your own repository.

    Optionally, if you have [Github-CLI](https://github.com/cli/cli) setup, you can use the following command. This should create a fork of the repo on your account, and clone it locally.

    ```shell
    gh repo fork Upvision/upvision.github.io --clone=true
    ```

3.  **Open the source code and start editing!**

    To serve the website locally,

    use `yarn serve` or `npm run serve`

    Open the directory you cloned into and in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

<h3> The things of note here are </h3>

1.  **`/src`**: This directory contains the actual source code for the project.

2.  **`LICENSE`**: This website uses the MIT-license.

3.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata. This manifest is how npm knows which packages to install for your project.

4.  **`README.md`**: This text file that you are reading right now.

## 🎓 Learning Resources

- **The gatsby documentation** can be found [on their website](https://www.gatsbyjs.com/docs). This contains various code-samples that you can refer. In particular, _Guides_, _API Reference_, and _Advanced Tutorials_ sections are worth checking out.

- **The gatsby tutorial** ideal for people new to the framework can find an [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).It starts with zero assumptions about your level of ability and walks through every step of the process.
  
## 💫 CI/CD

- The project uses github pages to host the webpage, and as such has a Continuos Integration workflow, setup on the master branch, that re-deploys the website on the release branch. As such, pushing to master aside from Pull Requests is prohibited.

- The project will also have Continous Development workflow, to test incoming commits on Pull Requests, so that they build properly when merged.
