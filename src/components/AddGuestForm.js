import React from 'react'
import { connect } from 'react-redux'
import { addGuest } from '../actions'

const mapDispatchToProps = {addGuest}

class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {guestName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({guestName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGuest(this.state.guestName, this.props.tableID)
    this.setState({guestName: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="guestForm">
        <label htmlFor="guestName">Guest Name:</label>
        <input id="guestName"
               type="text"
               required
               value={this.state.guestName}
               onChange={this.handleChange} />
        <div>
          <button type="submit">
            Add New Guest
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(GuestForm)
