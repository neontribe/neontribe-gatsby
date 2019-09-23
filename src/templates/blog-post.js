import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import SquiggleSeparator from '../components/SquiggleSeparator'
import VerticalSpacing from '../components/VerticalSpacing'
import PageMeta from '../components/PageMeta'
import Heading from '../components/Heading'
import Text from '../components/Text'
import RenderContent from '../components/RenderContent'
import { c_PRIMARY_BACKGROUND, GUTTER_PX } from '../theme'

// Copied to components/RenderContent
const BlogHeading = ({ size, children, wordBreak, ...props }) => (
  <Heading {...props}>
    <Text size={size} lineHeight={1.2} weight={700} wordBreak={wordBreak}>
      {children}
    </Text>
  </Heading>
)

const PublishedDate = ({ date }) => {
  const published = distanceInWordsToNow(date, {
    addSuffix: true,
  })

  return (
    <span>
      Published <time dateTime={date}>{published}</time>
    </span>
  )
}

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  const { title, published_at, updated_at, author_name } = frontmatter

  return (
    <Layout>
      <PageMeta
        type="article"
        title={title}
        publishedDate={parse(published_at)}
        modifiedDate={parse(updated_at)}
      />
      <ConstrainedWidth fullWidth={false}>
        <article>
          <header className="header">
            <BlogHeading level={1} size="large" wordBreak="break-word">
              {title}
            </BlogHeading>
            <VerticalSpacing size={5} />
            <address>By {author_name}</address>
            <PublishedDate date={parse(published_at)} />
          </header>
          <SquiggleSeparator />
          <RenderContent htmlAst={htmlAst} />
        </article>
      </ConstrainedWidth>
      <style jsx>{`
        .header {
          text-align: center;
        }
        article {
          background-color: ${c_PRIMARY_BACKGROUND};
          padding: 0 ${GUTTER_PX * 2}px;
        }
      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        published_at
        updated_at
        author_name
      }
    }
  }
`
