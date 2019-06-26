import React from 'react'

import { c_LOGO_BACKGROUND } from '../../theme'
import Hexagon from '../Hexagon'
import logoImage from './logo.svg'

export default () => (
  <span className="logo-wrapper">
    <Hexagon bgColour={c_LOGO_BACKGROUND} size={60} src={logoImage} />

    <style jsx>{`
      .logo-wrapper {
        display: block;
        height: auto;
        width: 100px;
      }
    `}</style>
  </span>
)
