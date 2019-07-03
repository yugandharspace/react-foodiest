import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';

import { validateName, validateEmail, validatePassword } from './validate';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: null
    };

    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  validateFName(value) {
    const result = validateName(value);
    console.log(result);
  }

  validateLName(value) {
    const result = validateName(value);
    console.log(result);
  }

  validateEmail(value) {
    const result = validateEmail(value);
    console.log(result);
  }

  validatePassword(value) {
    const result = validatePassword(value);
    console.log(result);
    if (result) {
      this.setState({ password: value });
    }
  }

  confirmPassword(value) {
    const { password } = this.state;
    let result = false;
    if (value === password) {
      result = true;
    }
    console.log(result);
  }

  render() {
    return (
      <Container style={{ marginTop: 100, width: 600 }}>
        <Paper class0="root">
          <Typography variant="h1" align="center">
            Sign Up
          </Typography>
          <InputField
            label="First Name"
            type="text"
            validate={this.validateFName}
          />
          <InputField
            label="Last Name"
            type="text"
            validate={this.validateLName}
          />
          <InputField
            label="Email"
            type="email"
            validate={this.validateEmail}
          />
          <InputField
            label="Passowrd"
            type="password"
            InputProps={true}
            validate={this.validatePassword}
          />
          <InputField
            label="Confirm Passowrd"
            type="password"
            InputProps={true}
            validate={this.confirmPassword}
          />
          <div style={{ textAlign: 'right' }}>
            <CustomButton type="primary" text="Next" size="large" />
          </div>
        </Paper>
      </Container>
    );
  }
}

export default SignUp;