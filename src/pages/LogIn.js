import React from "react";
import "./LogIn.css";
import axios from "axios";

class LogIn extends React.Component {

    handleSignIn = () => {

    }

    handleSignUp = () => {
        
    }

    render() {
        return (
            <div className="logIn">
                <div className="flexItem leftSide">
                    <section className="welcome">
                        <p className="welcomeTitle">Welcome to Secure password</p>
                        <p>Very good password</p>
                        <p>Very good password</p>
                        <p>Very good password</p>
                    </section>
                </div>
                <div className="flexItem rightSide">
                    <div className="highlightedPanel">
                        <form className="signIn">
                            <p className="smallTitle">Sign In with existing account</p>
                            <input className="textInput" type="email" name="email" placeholder="Email address" />
                            <input className="textInput" type="password" name="password" placeholder="Password" />
                            <input className="submitInput" type="submit" value="Sign In" onClick={this.handleSignIn} />

                        </form>
                    </div>
                    <div className="highlightedPanel">
                        <form className="signUp">
                            <p className="smallTitle">Wanna sign up?</p>
                            <input className="textInput" type="email" name="email" placeholder="Email address" />
                            <input className="submitInput" type="submit" value="Sign Up" onClick={this.handleSignUp} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;