import React, { Component } from "react";
import Logo from "../../LogoInsta.png";
import { Divider, Form, Button, Icon } from "semantic-ui-react";

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div style={this.props.styles.box}>
          <img src={Logo} alt="Instagram" />{" "}
          <Form onSubmit={e => this.props.handleSubmit(e, this.state)}>
            <Form.Field>
              <Form.Input
                name="email"
                onChange={this.handleChange}
                placeholder="email o nombre de usuario"
                icon={<Icon name='check circle outline' size="large" />}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
                icon={
                  <Icon name="remove circle" color="red" size="large" />
                }
              />
            </Form.Field>
            <Button type="submit" primary fluid>
              Iniciar sesión
            </Button>
            <Divider horizontal> O </Divider>
            <Button color="facebook">
              <Icon name="facebook" /> Iniciar sesión con facebook
            </Button>
          </Form>
        </div>
        <div style={this.props.styles.box}>
          ¿No tienes una cuenta?{" "}
          <a href="#!" onClick={this.props.handleClick}>
            Regístrate
          </a>
        </div>
      </div>
    );
  }
}

export default Signin;
