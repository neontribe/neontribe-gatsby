import React from 'react'

import H from '../Heading'
import VerticalSpacing from '../VerticalSpacing'
import Text from '../Text'

export default ({ problem, solution }) => (
  <>
    <Text size="normal" weight={700}>
      <H>Problem</H>
    </Text>

    <VerticalSpacing size={1} />

    <p>{problem}</p>

    {solution && (
      <>
        <VerticalSpacing size={2} />

        <Text size="normal" weight={700}>
          <H>Solution</H>
        </Text>

        <VerticalSpacing size={1} />

        <p>{solution}</p>
      </>
    )}
  </>
)
