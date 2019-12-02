import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Divider, Form, Button, Icon, Message } from "semantic-ui-react";
import _find from "lodash/find";
import Logo from "../../LogoInsta.png";

import queries from "../../utils/queries";

class Signup extends Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: "",
    errorsSignup: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRegister = (e, crearUser) => {
    e.preventDefault();
    const { username, password, fullname, email } = this.state;

    if (
      username.trim() !== "" ||
      password.trim() !== "" ||
      fullname.trim() !== "" ||
      email.trim() !== ""
    ) {
      crearUser({
        variables: { username, password, fullname, email }
      }).then(response => {
        const { errors, success } = response.data.crearUser;
        if (!success) {
          this.setState({
            errorsSignup: errors
          });
        }
      });
    }
  };

  render() {
    const errors = this.state.errorsSignup;
    console.log(errors);
    const { username, password, fullname, email } = this.state;
    return (
      <div>
        <div style={this.props.styles.box}>
          <img src={Logo} alt="Instagram" />{" "}
          <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
          <Mutation mutation={queries.mutation.createUser}>
            {(crearUser, { loading, error }) => {
              if (loading) return "Cargandoo...!";
              if (error) return `Error ${error}`;

              return (
                <Form onSubmit={e => this.handleRegister(e, crearUser)}>
                  <Button color="facebook">
                    <Icon name="facebook" /> Iniciar sesión con facebook
                  </Button>
                  <Divider horizontal> O </Divider>
                  <Form.Field>
                    <Form.Input
                      value={email}
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      icon={
                        errors.length === 0 ? null : _find(errors, {
                            path: "email"
                          }) ? (
                          <Icon name="remove circle" color="red" size="large" />
                        ) : (
                          <Icon
                            name="check circle outline"
                            color="green"
                            size="large"
                          />
                        )
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={fullname}
                      placeholder="Nombre completo"
                      name="fullname"
                      onChange={this.handleChange}
                      icon={<Icon color="red" size="large" />}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={username}
                      placeholder="Nombre de usuario"
                      name="username"
                      onChange={this.handleChange}
                      icon={
                        errors.length === 0 ? null : _find(errors, {
                            path: "username"
                          }) ? (
                          <Icon name="remove circle" color="red" size="large" />
                        ) : (
                          <Icon
                            name="check circle outline"
                            color="green"
                            size="large"
                          />
                        )
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={password}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      icon={
                        errors.length === 0 ? null : _find(errors, {
                            path: "password"
                          }) ? (
                          <Icon name="remove circle" color="red" size="large" />
                        ) : (
                          <Icon
                            name="check circle outline"
                            color="green"
                            size="large"
                          />
                        )
                      }
                    />
                  </Form.Field>
                  <Button
                    type="submit"
                    disabled={!username || !password || !fullname || !email}
                    primary
                    fluid
                  >
                    Registrarte
                  </Button>
                  {errors.length ? (
                    <Message
                      negative
                      header="Verifique los siguientes campos con errores"
                      list={errors.map(
                        error => `[${error.path}] ${error.message}`
                      )}
                    />
                  ) : null}
                </Form>
              );
            }}
          </Mutation>
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
