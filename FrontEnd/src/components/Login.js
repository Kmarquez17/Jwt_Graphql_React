import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import logo from "../Insta.png";

import Signin from "./Login/Signin";
import Signup from "./Login/Signup";
// import LostPassword from "./Login/LostPassword";

const styles = {
  grid: {
    height: "100%",
    width: "900px",
    margin: "0 auto"
  },
  box: {
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    textAlign: "center",
    marginBottom: "1em",
    padding: "1em"
  }
};

class Login extends Component {
  state = {
    showLogin: true,
    showRegister: false,
    showPassaword: false
  };

  showRegister = e => {
    e.preventDefault();
    this.setState({
      showLogin: false,
      showRegister: true,
      showPassaword: false
    });
  };

  showLogin = e => {
    e.preventDefault();
    this.setState({
      showLogin: true,
      showRegister: false,
      showPassaword: false
    });
  };

  

  render() {
    // showPassaword
    const { showLogin, showRegister } = this.state;
    return (
      <Grid verticalAlign="middle" centered columns={2} style={styles.grid}>
        <Grid.Row>
          <Grid.Column>
            <img src={logo} alt="Img" />
          </Grid.Column>
          <Grid.Column>
            {showLogin && (
              <Signin
                styles={styles}
                handleClick={this.showRegister}
              />
            )}
            {showRegister && (
              <Signup styles={styles} handleClick={this.showLogin} />
            )}
            {/* {showPassaword && <LostPassword styles={styles} />} */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
