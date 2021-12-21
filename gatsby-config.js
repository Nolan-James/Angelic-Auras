module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        `gatsby-plugin-image`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'static/img'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blog',
                path: 'src/blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pageData',
                path: 'src/pageData'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: { maxWidth: 1024 }
                    }
                ]
            }
        }
    ]
}