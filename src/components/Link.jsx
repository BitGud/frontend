import React from 'react'
import { Typography } from '@material-ui/core'
//import { Link } from "gatsby"
import { Link } from 'gatsby-theme-material-ui'

const Page = () => (
  <div>
    <Typography>
      Check out my <Link to="/blog">blog</Link>!
    </Typography>
  </div>
)

export default Page
