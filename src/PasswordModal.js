import React from 'react';

class PasswordModal extends React.Component {
  render() {
    return (
      <div className="modalBackground">
      <section className="modal">
        <h1>Your password</h1><span>&times;</span>
        <hr></hr>
        <div className="rowTab">
          <input type="password" value="apple" className="leftTab"></input>
          <input type="submit" value="Show" className="rightTab"></input>
        </div>
        <div className="rowTab">
          <input type="text" value="apple" className="leftTab"></input>
          <input type="submit" value="Email Password" className="rightTab"></input>
        </div>
        <hr></hr>
        <button>Close</button>
      </section>
      </div>
    );
  }
}

export default PasswordModal;