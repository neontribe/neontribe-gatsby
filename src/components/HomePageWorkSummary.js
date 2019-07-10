import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'

import VerticalSpacing from '../components/VerticalSpacing'
import { WorkSummary } from '../components/WorkDescription'
import Centered from '../components/Centered'
import Link from '../components/Link'

const randomItem = items => items[Math.floor(Math.random() * items.length)]

export default () => (
  <StaticQuery
    query={graphql`
      query {
        projects: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "projects" } } }
        ) {
          nodes {
            frontmatter {
              title
              problem
              image {
                childImageSharp {
                  fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const randProj = randomItem(data.projects.nodes)

      return (
        <React.Fragment>
          <WorkSummary
            level={2}
            title={randProj.frontmatter.title}
            problem={randProj.frontmatter.problem}
            fluid={randProj.frontmatter.image.childImageSharp.fluid}
            alternate
          />

          <VerticalSpacing size={5} />

          <Centered>
            <Link
              to={`/what-we-are-doing#${slugify(
                randProj.frontmatter.title,
                '-'
              )}`}
              button
            >
              View our solution
            </Link>
          </Centered>
        </React.Fragment>
      )
    }}
  />
)
