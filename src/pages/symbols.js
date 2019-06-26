import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import Heading from '../components/Heading'

import * as examples from '../examples'

export default () => (
  <Layout>
    <ConstrainedWidth>
      <Heading level={1} size="large">
        <Text heavy type="secondary">
          Symbols
        </Text>
      </Heading>
    </ConstrainedWidth>
    <div className="centered">
      {/* Sort keys to ensure order is consistent between static client-side js */}
      {Object.keys(examples)
        .sort()
        .map(key => React.createElement(examples[key], { key }))}
    </div>
    <style jsx>{`
      .centered {
        flex-direction: column;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </Layout>
)
