import React, { useEffect, useState } from 'react';
import AuthContext, { Permission } from './AuthContext';
import { useRouter } from 'next/router';

interface IAuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

function AuthProvider(props: IAuthProviderProps) {
  const { push } = useRouter();
  
  return (
    <AuthContext.Provider
      value>
      {/* <Box position="relative">
      {!loaded && <Box position="absolute" width="100%" height="100%" zIndex="999"> <DefaultAppLoader /></Box>} */}
      {props.children}
      {/* </Box> */}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
