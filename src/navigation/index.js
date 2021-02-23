import React from 'react';
import Routes from './Routes';
import {AuthProvieder} from './AuthProvider';

const Providers = () => {
  return (
    <AuthProvieder>
      <Routes />
    </AuthProvieder>
  )
}

export default Providers;