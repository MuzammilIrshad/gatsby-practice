/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
    siteMetadata: {
        title: 'WelCome to the Gatsby Bootcamp',
        author:'Mudassir Irshad',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: '7sf4ubupwnnr',
                accessToken: 'Su1VuXso6eloNRC2QUZzGkB9DjLaQ_7VVE9qe2hO6nE'
            }
        },
        'gatsby-plugin-sass', 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }, 
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark', 
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                         }
                    }
                ]
            }
        }
    ],
}
