import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  docsContainer: {
    width: '100%',
    height: '100%',

    marginTop: '300px',
  },
  docsText: {
    backgroundColor: window.localStorage.getItem('theme') === 'light' ? 'white' : 'black',
    width: '100%',
    height: '100%',
  },
}))

function Docs(props) {
  const styles = useStyles()
  return (
    <Grid className={styles.docsContainer} container spacing={3}>
      <Grid item xs={3}>
        <div>
          Table of Content <br />
          <a href="fill" value="Step 1: step one">
            Step 1: step one
          </a>
          <br />
          <a href="fill" value="Step 2: step two">
            Step 2: step two
          </a>
          <br />
          <a href="fill" value="Step 3: step three">
            Step 3: step three
          </a>
        </div>
      </Grid>
      <Grid className={styles.docsText} item xs={9}>
        <div>
          <h1 className="Step1">Step one!</h1>
          <h3 className="Step1.1">Step one point one</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
          sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
          <h3 className="Step1.2">Step one point two</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
          sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
          <h1 className="Step2">Step two!</h1>
          <h3 className="Step2.1">Step two point one</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
          sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
          <h3 className="Step2.2">Step two point two</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
          sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
        </div>
      </Grid>
    </Grid>
  )
}

export default Docs
