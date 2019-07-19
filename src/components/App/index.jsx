import React, { Component } from 'react';
import { Suspense, lazy } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loading, SignIn as SignInAction } from '../../actions';
import { withFirebase } from '../../services/firebase';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

// Initial Loading
import Loader from '../Loader';

const Restaurateur = lazy(() =>
  import('../../routes/private/RestaurateurRoute')
);
const Foodie = lazy(() => import('../../routes/private/FoodieRoute'));
const Landing = lazy(() => import('../../routes/public/LandingRoute'));
const AccountType = lazy(() => import('../../routes/public/AccountTypeRoute'));
const SignUpRestaurateur = lazy(() =>
  import('../../routes/public/SignUpRestaurateurRoute')
);
const SignUpFoodie = lazy(() =>
  import('../../routes/public/SignUpFoodieRoute')
);
const EmailVerification = lazy(() =>
  import('../../routes/verification/EmailVerificationRoute')
);
const SignIn = lazy(() => import('../../routes/public/SignInRoute'));
const PasswordReset = lazy(() =>
  import('../../routes/public/PasswordResetRoute')
);

class App extends Component {
  componentDidMount() {
    const { firebase, SignInAction, Loading } = this.props;
    // console.log(this.props);

    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        unsubscribe();

        return firebase
          .getUser(user.uid)
          .then(querySnapshot => {
            // console.log(querySnapshot.data());

            const userData = querySnapshot.data();
            userData.uid = user.uid;
            userData.isVerified = user.emailVerified;

            SignInAction(userData);
          })
          .then(() => {
            Loading({ isLoading: false });
          })
          .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        unsubscribe();

        this.props.Loading({ isLoading: false });
      }
    });
  }

  render() {
    const { isLoading, user } = this.props;

    console.log(user);

    if (isLoading) {
      return (
        <ThemeProvider theme={theme}>
          <Loader />;
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.DASHBOARD} component={Restaurateur} />
            <Route path={ROUTES.HOME} component={Foodie} />
            <Route path={ROUTES.ACCOUNT_TYPE} component={AccountType} />
            <Route
              path={ROUTES.SIGNUP_RESTAURATEUR}
              component={SignUpRestaurateur}
            />
            <Route path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodie} />
            <Route path={ROUTES.VERIFICATION} component={EmailVerification} />
            <Route exact path={ROUTES.SIGNIN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return { isLoading: state.loading.isLoading, user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading, SignInAction }
  ),
  withFirebase
)(App);
