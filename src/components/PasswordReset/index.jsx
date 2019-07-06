import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import Progress from '../Progress';
import Grid from '@material-ui/core/Grid';

import { validateEmail } from '../SignUp/validate';

class PasswordReset extends Component {
  validateEmail(value) {
    const result = validateEmail(value);
    console.log(result);
  }

  render() {
    return (
      <Container style={{ marginTop: 125, width: 600 }}>
        <Progress />
        <Paper class0="root">
          <form noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  align="center"
                  style={{ marginBottom: 20 }}
                >
                  Forgot your Password?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  type="email"
                  validate={this.validateEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" align="center">
                  We'll send you a link to reset your password.
                </Typography>
              </Grid>
              <Grid
                container
                style={{ marginTop: 25, marginLeft: 12, marginRight: 12 }}
              >
                <Grid item xs={6}>
                  <div style={{ textAlign: 'left' }}>
                    <CustomButton
                      variant="outlined"
                      type="secondary"
                      text="Back to Sign in"
                      size="large"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: 'right' }}>
                    <CustomButton
                      variant="contained"
                      type="primary"
                      text="Email me reset link"
                      size="large"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default PasswordReset;
