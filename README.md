# justblog

## Getting started

`git clone https://github.com/kretawiweka/justblog/`

Then to set up the repo:

```bash
cd your-blog
yarn
yarn develop
```

Your site is now running at `https://localhost:8000/`! Start making changes to the source code and see the site update live!

To learn more about Gatsby head to the [Gatsby website](https://www.gatsbyjs.org/).

The structure of this repository is based off the [Gatsby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) - check that README out if you want more information about the top level structure of a typical Gatsby project.

To build a production build of the website, run `npm run build`. This first compiles your Reason files by running `bsb -make-world`, and then creates your production build by running `gatsby build`. (You can see the `npm run build` script in the `package.json` file).
