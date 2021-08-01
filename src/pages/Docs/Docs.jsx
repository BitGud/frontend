import React from 'react'
import { Grid } from '@material-ui/core'

function Docs(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div>
            Table of Content <br />
            <a href="#1.1" value="Step 1: step one">
              Step 1: step one
            </a>
            <br />
            <a href="#2.1" value="Step 2: step two">
              Step 2: step one
            </a>
            <br />
            <a href="#2.2" value="Step 3: step three">
              Step 2: step two
            </a>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div>
            <h1 className="Step1">Step one!</h1>
            <h3 className="Step1.1" id="1.1">
              Step one point one
            </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
            <h3 className="Step1.2" id="1.2">
              Step one point two
            </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
            <h1 className="Step2">Step two!</h1>
            <h3 className="Step2.1" id="2.1">
              Step two point one
            </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
            <h3 className="Step2.2" id="2.2">
              Step two point two
            </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit.
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Docs
