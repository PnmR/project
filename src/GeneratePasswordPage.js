import React from 'react';
import PasswordModal from './PasswordModal';
import axios from 'axios';

class GeneratePasswordPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pswd: "",
    }
  }

  toggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleGenerate = () => {
    this.toggle();
    axios({
      method: "get",
      url: "http://localhost/pswd",
      headers: { "Content-Type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.pswd = result.data;
      })
      .catch(error => this.setState({ error: error.message }));

  }

  render() {
    return (
      <div className="generatePasswordPage">
        <section className="pswdRequirements">
          <div className="checkboxes">
            <input type="checkbox" name="lowerCase" value="lowerCase" className="checkboxL"></input>
            <label for="lowerCase" className="checkboxR">Contains at least 1 lowerCase</label><br />
            <input type="checkbox" name="upperCase" value="upperCase" className="checkboxL"></input>
            <label for="upperCase" className="checkboxR">Contains at least 1 uppercase</label><br />
            <input type="checkbox" name="number" value="number"></input>
            <label for="number">Contains at least 1 number</label><br />
            <input type="checkbox" name="symbol" value="symbol"></input>
            <label for="symbol">Contains at least 1 symbol</label><br />
          </div>
        </section>
        <button onClick={
          () => {
            this.handleGenerate();
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