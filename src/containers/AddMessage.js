import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author, date ) => {
    dispatch(addMessage(message, author,new Date().toLocaleString()))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
