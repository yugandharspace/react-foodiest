import React, { Component, Fragment } from 'react';

import PrimaryButton from '../PrimaryButton';

import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h2">Hello World</Typography>
        <br />
        <PrimaryButton />
      </Fragment>
    );
  }
}

export default App;
