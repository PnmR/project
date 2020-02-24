import React from 'react';

class PasswordModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showPswdType: "password",
      showHidePswdText: "Show password"
    }
  }

  showPswd() {
    this.setState(() => ({
      showPswdType: this.state.showPswdType === "text" ? "password" : "text",
      showHidePswdText: this.state.showHidePswdText === "Hide password" ? "Show password" : "Hide password",
    }));
  }

  render() {
    return (
      <div className="modalBackground">
        <section className="modal">
          <h1>Your password</h1><span>&times;</span>
          <hr></hr>
          <div className="rowTab">
            <input type={this.state.showPswdType} value={this.props.pswd} className="leftTab"></input>
            <input type="submit" value={this.state.showHidePswdText} onClick={this.showPswd.bind(this)} className="rightTab" ></input>
          </div>
          <div className="rowTab">
            <input type="text" value="apple" className="leftTab"></input>
            <input type="submit" value="Email Password" className="rightTab"></input>
          </div>
          <hr></hr>
          <button onClick={this.props.closeModal}>Close</button>
        </section>
      </div>
    );
  }
}

export default PasswordModal;