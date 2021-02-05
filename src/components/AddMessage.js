import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Current User')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      	placeholder = "Type Message And Press Enter"
	size="255"
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
