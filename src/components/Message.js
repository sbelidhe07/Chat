import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ message, author , date }) => (

  <p>
    <i>{author}</i>: {message} {date} 
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message
