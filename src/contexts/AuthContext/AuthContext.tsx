import { createContext, useContext } from 'react';
import { z } from 'zod';

export const permissionsValidator = z
  .enum(['SuperAdminAccess', 'DealerAccess', 'ConsumerAccess', 'StaffAccess'])
  .array();

export type Permission = z.infer<typeof permissionsValidator>[number];

interface IAuthContext {}

const AuthContext = createContext<IAuthContext>({});

export default AuthContext;

export function useAuthContext() {
  return useContext(AuthContext);
}
