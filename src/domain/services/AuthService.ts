import axios from 'axios';

export interface IAuthService {
  signUp(data: Registration): Promise<AuthResponse>;
  signIn(data: LoginCredentials): Promise<AuthResponse>;
  forgotPassword(data: PasswordResetRequest): Promise<AuthResponse>;
  setPassword(data: PasswordReset): Promise<AuthResponse>;
}

import {
  RegistrationValidator,
  LoginCredentialsValidator,
  PasswordResetRequestValidator,
  PasswordResetValidator,
  AuthResponseValidator,
  Registration,
  LoginCredentials,
  PasswordResetRequest,
  PasswordReset,
  AuthResponse,
} from '../validators/auth';

export class AuthService implements IAuthService {
  private api;
  private baseUrl: string = 'API_URL_TBD'; // Replace with actual API URL

  constructor() {
    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async signUp(data: Registration): Promise<AuthResponse> {
    RegistrationValidator.parse(data);
    const res = await this.api.post('/auth/signup', data);
    return AuthResponseValidator.parse(res.data);
  }

  async signIn(data: LoginCredentials): Promise<AuthResponse> {
    LoginCredentialsValidator.parse(data);
    const res = await this.api.post('/auth/signin', data);
    return AuthResponseValidator.parse(res.data);
  }

  async forgotPassword(data: PasswordResetRequest): Promise<AuthResponse> {
    PasswordResetRequestValidator.parse(data);
    const res = await this.api.post('/auth/forgot-password', data);
    return AuthResponseValidator.parse(res.data);
  }

  async setPassword(data: PasswordReset): Promise<AuthResponse> {
    const res = await this.api.post('/auth/set-password', data);
    return AuthResponseValidator.parse(res.data);
  }
}
