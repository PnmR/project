import React from 'react';
import PasswordModal from './PasswordModal';

class GeneratePasswordPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    }
  }

  show() {
    this.setState({
      showModal: true
    });
  }

  render() {
    return (
      <div>
      <button onClick={this.show.bind(this)}>Generate password</button>
      {
        this.state.showModal ?
        <PasswordModal></PasswordModal> : null
      }
      </div>
    );
  }
}

export default GeneratePasswordPage;
