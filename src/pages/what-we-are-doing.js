import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import HexagonGrid from '../components/HexagonGrid'
import Hexagon from '../components/Hexagon'
import { c_NEONS } from '../theme'
import SquiggleSeparator from '../components/SquiggleSeparator'
import WorkDescription from '../components/WorkDescription'
import { StaticQuery, graphql } from 'gatsby'
import ExternalLink from '../components/Link'

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

const WhatWeAreDoingPage = () => (
  <Layout>
    <ConstrainedWidth>
      <Heading level={1}>
        <div className="centered">
          <Text size="large" weight={500}>
            What we're doing
          </Text>
          <p>
            <Text>
              Neontribe has a national reputation for our work in tech-for-good,
              and an international reputation in travel and tourism. Our work
              identifies the issues organisations have and finds ways to help
              them out. Our design and development focuses on the people those
              organisations work with, their situations and stories
            </Text>
          </p>
        </div>
      </Heading>
    </ConstrainedWidth>

    <SquiggleSeparator></SquiggleSeparator>

    <HexagonGrid rate={25} rows={2}>
      <Hexagon />
      <Hexagon />
      <Hexagon />
      <Hexagon />
    </HexagonGrid>

    <SquiggleSeparator />

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
                solution
                subtitle
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
        return data.projects.nodes.map((project, index) => (
          <WorkDescription
            alternate={index % 2 === 0}
            key={project.frontmatter.title}
            fluid={project.frontmatter.image.childImageSharp.fluid}
            level={3}
            title={project.frontmatter.title}
            subtitle={project.frontmatter.subtitle}
            problem={project.frontmatter.problem}
            solution={project.frontmatter.solution}
          />
        ))
      }}
    />
    <SquiggleSeparator />

    <ConstrainedWidth>
      <div className="centered">
        <Heading level={1}>
          <Text size="large" weight={500}>
            Get in touch
          </Text>
        </Heading>

        <VerticalSpacing size={1} />

        <ExternalLink href="mailto:hello@neontribe.co.uk">
          <Text size="medium">hello@neontribe.co.uk</Text>
        </ExternalLink>
      </div>
    </ConstrainedWidth>
    <div className="text-bg"></div>
    <style jsx>{`
      .centered {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default WhatWeAreDoingPage
