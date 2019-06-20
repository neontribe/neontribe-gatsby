import React from 'react'
import PropTypes from 'prop-types'
import {
  fontSizes,
  c_PRIMARY_TEXT,
  c_PRIMARY_BACKGROUND,
  c_PRIMARY_BACKGROUND_ALTERNATIVE,
  c_SECONDARY_TEXT,
  c_SECONDARY_BACKGROUND,
  GUTTER_PX,
} from '../theme'

const Text = ({
  type = 'primary',
  alternate,
  transparent,
  children,
  heavy,
  size,
}) => (
  <span
    className={[
      type,
      heavy && 'heavy',
      transparent && 'transparent',
      alternate && 'alternate',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
    <style jsx>{`
      span {
        display: inline-block;
        color: ${alternate ? c_SECONDARY_TEXT : c_PRIMARY_TEXT};
        padding: 2px ${GUTTER_PX}px;
        line-height: 1.5;
        font-size: ${fontSizes[size] || 'inherit'};
      }

      .heavy {
        font-weight: bold;
        font-size: 1.25rem;
      }

      /* text color */
      .primary {
        color: ${c_PRIMARY_TEXT};
      }
      .secondary {
        color: ${c_SECONDARY_TEXT};
      }
      /* transparency */
      .primary:not(.transparent) {
        background-color: ${c_PRIMARY_BACKGROUND};
      }
      .alternate:not(.transparent) {
        background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
      }
      .secondary:not(.transparent) {
        background-color: ${c_SECONDARY_BACKGROUND};
      }
    `}</style>
  </span>
)

Text.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  alternate: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
  heavy: PropTypes.bool,
}

export default Text
