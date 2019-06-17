import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Page from './Page'
import { REM_PX, COLOUR_PRIMARY_BACKGROUND } from '../../theme'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <style jsx global>{`
          html,
          body,
          body > div,
          body > div > div {
            height: 100%;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            background-color: ${COLOUR_PRIMARY_BACKGROUND};
            font-size: ${REM_PX}px;
            font-family: sans-serif;
          }
        `}</style>
        <Page title={data.site.siteMetadata.title}>{children}</Page>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout