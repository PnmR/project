import React from 'react';
import PasswordModal from './PasswordModal';

class GeneratePasswordPage extends React.Component {
  pswd;
  constructor() {
    super();
    this.state = {
      showPopup: false
    }
  }

  toggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  generatePassword() {
    return "xyz";
  }

  render() {
    return (
      <div className="generatePasswordPage">
        <button onClick={
          () => {
            this.toggle();
            this.pswd = this.generatePassword();
          }
        }
        >Generate password</button>
        {
          this.state.showModal ?
            <PasswordModal closeModal={this.toggle.bind(this)} pswd={this.pswd}>
            </PasswordModal> : null
        }
      </div>
    );
  }
}

export default GeneratePasswordPage;
//export function getPassword();
