import React, { Component } from "react";
import { Divider, Form, Button, Icon, Message } from "semantic-ui-react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import _find from "lodash/find";
import Logo from "../../LogoInsta.png";
import queries from "../../utils/queries";
class Signin extends Component {
  state = {
    email: "",
    password: "",
    errorsSignin: []
  };

  handleSubmit = (e, login) => {
    e.preventDefault();

    login().then(response => {
      const { errors, success, token } = response.data.login;
      console.log(errors)

      if (!success) {
        this.setState({
          errorsSignin: errors
        });
      } else {
        localStorage.setItem("token", token);
        this.props.history.push("/");
      }
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password, errorsSignin } = this.state;
    return (
      <div>
        <div style={this.props.styles.box}>
          <img src={Logo} alt="Instagram" />{" "}
          <Mutation
            mutation={queries.mutation.login}
            variables={{ email, password }}
          >
            {(login, { loading, error }) => {
              if (loading) return "Cargandoo...!";
              if (error) return `Error ${error}`;
              return (
                <Form onSubmit={e => this.handleSubmit(e, login)}>
                  <Form.Field>
                    <Form.Input
                      value={email}
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Email o Nombre de usuario"
                      icon={
                        errorsSignin.length === 0 ? null : _find(errorsSignin, {
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
                      size="large"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      value={password}
                      name="password"
                      onChange={this.handleChange}
                      type="password"
                      placeholder="Password"
                      icon={
                        errorsSignin.length === 0 ? null : _find(errorsSignin, {
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
                  <Button type="submit" primary fluid>
                    Iniciar sesión
                  </Button>
                  <Divider horizontal> O </Divider>
                  <Button color="facebook" type="submit">
                    <Icon name="facebook" /> Iniciar sesión con facebook
                  </Button>
                  {errorsSignin.length ? (
                    <Message
                      negative
                      header="Verifique los siguientes campos con errores"
                      list={errorsSignin.map(
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
          ¿No tienes una cuenta?{" "}
          <a href="#!" onClick={this.props.handleClick}>
            Regístrate
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
