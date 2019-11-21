import React, { Component } from "react";
import { Divider, Form, Button, Icon } from "semantic-ui-react";
import Logo from "../../LogoInsta.png";

class Signup extends Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRegister = e => {

    debugger
    e.preventDefault();
    const { username, password, fullname, email } = this.state;       
    this.props.crearUser({ variables: { username, password, fullname, email } });
  };

  render() {
    return (
      <div>
        <div style={this.props.styles.box}>
          <img src={Logo} alt="Instagram" />{" "}
          <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
          <Form onSubmit={this.handleRegister}>
            <Button color="facebook">
              <Icon name="facebook" /> Iniciar sesión con facebook
            </Button>
            <Divider horizontal> O </Divider>
            <Form.Field>
              <Form.Input
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                icon={<Icon color="red" size="large" />}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                placeholder="Nombre completo"
                name="fullname"
                onChange={this.handleChange}
                icon={<Icon color="red" size="large" />}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                placeholder="Nombre de usuario"
                name="username"
                onChange={this.handleChange}
                icon={<Icon color="red" size="large" />}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                icon={<Icon color="red" size="large" />}
              />
            </Form.Field>
            <Button type="submit" primary fluid>
              Registrarte
            </Button>
          </Form>
        </div>
        <div style={this.props.styles.box}>
          ¿Ya tienes una cuenta?{" "}
          <a href="#!" onClick={this.props.handleClick}>
            Inicia Sesión
          </a>
        </div>
      </div>
    );
  }
}

export default Signup;
