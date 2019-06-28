import React from 'react'
import Img from 'gatsby-image'
import css from 'styled-jsx/css'

import { c_SECONDARY_BACKGROUND, GUTTER_PX, CUT_CORNER_PX } from '../../theme'
import Heading from '../Heading'
import Text from '../Text'

const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    flex-grow: 1;
  }
`
const TribeMemberFront = ({
  fluid,
  name,
  headingLevel,
  skills,
  onClick,
  sepColour,
}) => (
  <figure className="tribe-figure" onClick={onClick}>
    {fluid ? (
      <Img
        className={imageStyles.className}
        fluid={fluid}
        alt={`${name}'s profile`}
      />
    ) : (
      <img
        src="https://placeimg.com/700/1000/animals"
        className="placeholder-image"
        alt={`${name}'s placeholder profile`}
      />
    )}
    <hr className="separator" />
    <figcaption className="name-skills">
      <div className="content">
        <Heading level={headingLevel}>
          <Text type="secondary" weight={700} size="medium">
            {name}
          </Text>
        </Heading>
        <Text type="secondary">{skills.join(' | ')}</Text>
      </div>
    </figcaption>
    {imageStyles.styles}
    <style jsx>{`
      .separator {
        background-color: ${sepColour};
        margin: 0;
        height: ${GUTTER_PX}px;
        border: none;
        flex-shrink: 0;
      }

      .tribe-figure {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      .name-skills {
        padding: ${GUTTER_PX}px;
        /* Cut the corner off by CUT_CORNER_PX and later on we max-width the content */
        background: linear-gradient(
          -45deg,
          transparent ${CUT_CORNER_PX}px,
          ${c_SECONDARY_BACKGROUND} ${CUT_CORNER_PX}px
        );
      }

      .content {
        max-width: 80%;
        max-width: calc(100% - ${CUT_CORNER_PX}px);
        margin-right: auto;
      }

      .placeholder-image {
        flex-grow: 1;
        overflow: hidden;
        display: block;
      }
    `}</style>
  </figure>
)

export default TribeMemberFront
