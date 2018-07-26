import React from 'react';

import AuthUserContext from '../../components/firebaseComp/AuthUserContext';
import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../../components/firebaseComp/PasswordChange';
import withAuthorization from '../../components/firebaseComp/withAuthorization';
import SignOutButton from '../../components/firebaseComp/SignOut';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <SignOutButton />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);