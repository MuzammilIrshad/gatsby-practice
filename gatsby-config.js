/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
   
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: `7sf4ubupwnnr`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: 'Su1VuXso6eloNRC2QUZzGkB9DjLaQ_7VVE9qe2hO6nE',
            },
        },
        'gatsby-plugin-sass', 
         'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-image',
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
