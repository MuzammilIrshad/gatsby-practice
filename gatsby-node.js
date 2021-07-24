
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {

    const { createNodeField } = actions


    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        console.log(JSON.stringify(node, undefined, 4))
        console.log('---------------', slug);

        createNodeField({
            node,
            name: 'slug',
            value:slug
        })
      }
}

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;

    //1. Get path to Template
    const blogTemplate = path.resolve('./src/templates/blog.js');

    //2. Get MarkDown/CMS Data

    const res = await graphql(`
 query {
  allContentfulBlog {
    edges {
      node {
        title
        slug
        publishedDate(fromNow: true)
      }
    }
  }
}
`)
   /* const res = await graphql(`
                
        query {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
 `)*/
    //3. Create Pages
    res.data.allContentfulBlog.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}
