/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// highlight-start
		{
		  resolve: `gatsby-source-filesystem`,
		  options: {
			path: `${__dirname}/src/data/`,
		  },
		},
		// highlight-end
	],
}
