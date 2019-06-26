import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow } from 'date-fns'

import Link from '../components/Link'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import SquiggleSeparator from '../components/SquiggleSeparator'

import { capitalizeFirstLetter } from '../helpers'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const getDateString = date =>
    capitalizeFirstLetter(
      distanceInWordsToNow(date, {
        addSuffix: true,
      })
    )

  return (
    <Layout>
      <ConstrainedWidth>
        <div style={{ textAlign: 'center ' }}>
          <Heading level={1}>
            <Text size="xlarge" heavy>
              Our Blog
            </Text>
          </Heading>
        </div>
        <SquiggleSeparator />
        <ul>
          {edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                <Heading level={3} size="small">
                  <Text size="normal">
                    {getDateString(new Date(node.frontmatter.published_at))}
                  </Text>
                </Heading>
                <Heading level={2}>
                  <Text size="large" heavy>
                    {node.frontmatter.title}
                  </Text>
                </Heading>
              </Link>
            </li>
          ))}
        </ul>
      </ConstrainedWidth>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        ul li {
          margin: 8rem 0;
        }
      `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___published_at] }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            published_at
          }
        }
      }
    }
  }
`

export default BlogPage
