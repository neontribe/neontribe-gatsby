import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import SquiggleSeparator from '../components/SquiggleSeparator'
import {
  TheTribeTopParagraph,
  TheTribeBottomParagraph,
} from '../components/TheTribeParagraphs'
import TriberGrid from '../components/TriberGrid'
import VerticalSpacing from '../components/VerticalSpacing'

const NotFoundPage = () => (
  <Layout>
    <ConstrainedWidth>
      <div className="centered">
        <Heading level={1}>
          <Text weight={500} lineHeight={1.2} size="large">
            The Tribe
          </Text>
        </Heading>
        <VerticalSpacing size={2} />
        <TheTribeTopParagraph />
      </div>

      <SquiggleSeparator />
      <TriberGrid />
      <SquiggleSeparator />

      <div className="centered">
        <Heading level={2}>
          <Text weight={500} lineHeight={1.2} size="large">
            Join The Tribe
          </Text>
        </Heading>
        <VerticalSpacing size={2} />
        <TheTribeBottomParagraph />
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      .centered {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default NotFoundPage
