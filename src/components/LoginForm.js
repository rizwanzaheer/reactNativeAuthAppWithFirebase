import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  state = { email: '', password: '', err: '' }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ err: '' });
    firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
        this.setState({ err: 'Authentication failed!' });
      });
    });
  }
  render() {
    const { errTextStyle } = styles;
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
        <Text style={errTextStyle}>
          {this.state.err}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
