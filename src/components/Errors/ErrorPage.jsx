import React from 'react'

import './Errors.scss'

import { icons } from '../../utils'

const ErrorPage = (props) => {
  return (
    <div className="messageContainer">
      <h1 className="notFoundText">Oh no, the router cannot be found</h1>
    </div>
  )
}

export default ErrorPage
