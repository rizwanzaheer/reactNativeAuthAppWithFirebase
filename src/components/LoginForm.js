import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            label="Email"
            placeHolder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            label="Password"
            placeHolder="Password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}
