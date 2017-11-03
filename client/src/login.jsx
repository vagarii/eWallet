import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Divider, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      legal_names: '',
      password: '',
      email: '',
      phone_numbers: '',
      nickname: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
    this.handleNickameChange = this.handleNickameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ legal_names: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePhoneNumChange(e) {
    this.setState({ phone_numbers: e.target.value });
  }

  handleNickameChange(e) {
    this.setState({ nickname: e.target.value });
  }

  handleSubmit() {
    const userData = {
      legal_names: this.state.legal_names,
      password: this.state.password,
      email: this.state.email,
      phone_numbers: this.state.phone_numbers,
      nickname: this.state.nickname,
    };
    this.props.createUser(userData);
  }

  render() {
    return (
        <div className="login-form">
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
            height: 100%;
            }
          `}</style>
          <Grid
              stackable
              textAlign="center"
              style={{ padding: '8em 0em' }}
              verticalAlign="middle"
              columns="equal"
          >
            <Grid.Row textAlign="center">
            <Grid.Column width={8} style={{ paddingLeft: '5em', paddingRight: '4em'}} >
              <Header as='h1' style={{ fontSize: '2em' }} color="black">
                Test Everything eWallet Beta
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Entering our sandbox allows you to get a feel for the SynapseFi API experience before applying for a merchant account or going to production.
              </p>
            </Grid.Column>

            <Grid.Column style={{ maxWidth: 450 }} floated='left' width={7}>
              <Header as="h2" color="black" textAlign="left">
                Log in to your account
              </Header>
              <Form size="large">
                <Segment vertical>
                  <Form.Field required>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      onChange={this.handleNameChange}
                      value={this.state.legal_names}
                      placeholder="Legal Name"
                    />
                    <Divider />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      type="password"
                      onChange={this.handlePasswordChange}
                      value={this.state.password}
                      placeholder="Password"
                    />
                    <Divider />
                    <Form.Input
                      fluid
                      icon="mail outline"
                      iconPosition="left"
                      onChange={this.handleEmailChange}
                      value={this.state.email}
                      placeholder="Email Address"

                    />
                    <Divider />
                    <Form.Input
                      fluid
                      icon="phone"
                      iconPosition="left"
                      onChange={this.handlePhoneNumChange}
                      value={this.state.phone_numbers}
                      placeholder="Phone Number"
                    />
                    <Divider />
                    <Form.Input
                      fluid
                      icon="credit card alternative"
                      iconPosition="left"
                      onChange={this.handleNickameChange}
                      value={this.state.nickname}
                      placeholder="Account Nickname"
                    />
                  </Form.Field>

                  <Link to="/home">
                    <Button onClick={this.handleSubmit} color="green" fluid size="large">
                      Log in
                    </Button>
                  </Link>

                </Segment>
              </Form>
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default LoginForm;
