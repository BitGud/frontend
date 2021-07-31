import React from 'react'
import { icons } from '../../utils'

import './Errors.scss'

const ErrorPage = (props) => {
  return (
    <div className="messageContainer">
      <h1 className="notFoundText">Oh no, the router cannot be found</h1>
    </div>
  )
}

export default ErrorPage
