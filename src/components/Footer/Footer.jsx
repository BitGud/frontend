import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './FooterStyles'

import icons from '../../utils/icons'

const Footer = (props) => {
  const styles = useStyles()

  return (
    <>
      <Typography className={styles.footerText}>
        Made in NZ with
        <img alt="heart" src={icons.heart} className={styles.footerImage} />
      </Typography>
    </>
  )
}

export default Footer
