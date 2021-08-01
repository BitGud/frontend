import React from 'react'
import { Grid, Link, Typography } from '@material-ui/core'

import useStyles from './DocsStyles'

function Docs(props) {
  const styles = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div>
            <Typography className={styles.docsContentsHeadingText}>Table of Content</Typography>
            <Typography className={styles.docsContentsText}>
              <a href="#Introduction">Introduction</a>
              <br />
              <a href="#Features">Features</a>
              <br />
              <a href="#Steps to Implement">Steps to Implement</a>
              <br />
            </Typography>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div>
            <Typography id="Introduction" className={styles.docsBodyHeadingText}>
              Introduction
            </Typography>
            <Typography className={styles.docsBodyText}>
              As new developers we identified a problem, and attempt to solve it. We noticed that after sometime, say 10
              or 20min, some students have trouble staying focused. Hence we stated a product goal using an user focused
              approach: <br />
              To create an application that is useful, effective, enjoyable, and most importantly that it assists
              students all the way from beginner to advanced level.
            </Typography>
            <br />
            <Typography id="Features" className={styles.docsBodySubheadingText}>
              Features
            </Typography>
            <Typography className={styles.docsBodyText}>
              <b>Front end</b>
              <li>Light/dark mode</li>
              <li>Log in & sign up</li>
              <li>Log in with GitHub</li>
              <li>Settings</li>
              <li>Connect to git</li>
              <li>Documentation guide</li>
              <li>Not found page</li>
              <li>Analytics dashboard</li>
              <b>Backend</b>
              <li>VS Code extension</li>
              <li>NoSQL database</li>
              <li>GitHub OAuth</li>
              <li>JWT Authentication</li>
              <li>Job Scheduler</li>
              <li>Live Deployment</li>
              <li>Real time communication</li>
              <b>VS Code Extension</b>
              <li>Log in with GitHub</li>
              <li>Realtime communication</li>
              <li>Customizable</li>
              <li>Automatic message interstation into the current editor</li>
              <b>Git Hook</b>
              <li>Automatically sent data upon commit</li>
              <li>Installation documentation guide</li>
              <li>Available on npm</li>
              <li>Attach to Husky</li>
            </Typography>
            <br />
            <Typography id="Steps to Implement" className={styles.docsBodyHeadingText}>
              Steps to Implement
            </Typography>
            <Typography className={styles.docsBodyText}>
              As new developers we identified a problem, and attempt to solve it. We noticed that after sometime, say 10
              or 20min, some students have trouble staying focused. Hence we stated a product goal using an user focused
              approach: <br />
              To create an application that is useful, effective, enjoyable, and most importantly that it assists
              students all the way from beginner to advanced level.
            </Typography>
            <br />
            <Typography id="Steps to Implement" className={styles.docsBodyHeadingText}>
              Visual Code Extension
            </Typography>
            <Typography className={styles.docsBodyText}>
              Download Here: https://marketplace.visualstudio.com/items?itemName=bitgud.bitgud <br />
              View Repo: https://github.com/BitGud/bitgud-vscode
            </Typography>
            <br />
            <Typography id="Steps to Implement" className={styles.docsBodyHeadingText}>
              NPM module for Husky Hook
            </Typography>
            <Typography className={styles.docsBodyText}>
              Download Here: https://npmjs.com/package/bitgud-plugin <br />
              View Repo: https://github.com/BitGud/bitgud-plugin
            </Typography>
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Docs
