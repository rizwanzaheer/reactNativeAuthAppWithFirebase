import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
    
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            label="Email"
            onChangeText={ text => this.setState({text})}
          />
        </CardSection>
        <CardSection>
          <TextInput />
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
