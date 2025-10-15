import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { AuthService } from '@/domain/services/AuthService';
import { Registration, RegistrationValidator } from '@/domain/validators/auth';
import { Formik, Form, Field } from 'formik';
import AuthPageTemplate from '@/components/templates/AuthPageTemplate';

const authService = new AuthService();

export default function SignUpPage() {
  return (
    <AuthPageTemplate>
      <Box sx={{ width: 1, maxWidth: '500px', mx: 'auto', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            username: '',
            acceptTerms: false,
          }}
          validate={values => {
            try {
              RegistrationValidator.parse(values);
              return {};
            } catch (err: any) {
              const errors: Record<string, string> = {};
              if (err.errors) {
                err.errors.forEach((e: any) => {
                  if (e.path && e.path[0]) errors[e.path[0]] = e.message;
                });
              }
              return errors;
            }
          }}
          onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
            setStatus(null);
            try {
              await authService.signUp(values as Registration);
              setStatus({ success: 'Sign up successful!' });
              resetForm();
            } catch (err: any) {
              setStatus({ error: err.message || 'Sign up failed' });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched, status }) => (
            <Form>
              <Stack spacing={2}>
                <Field name="email">
                  {({ field }: any) => (
                    <TextField
                      label="Email"
                      type="email"
                      required
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ field }: any) => (
                    <TextField
                      label="Password"
                      type="password"
                      required
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ field }: any) => (
                    <TextField
                      label="Confirm Password"
                      type="password"
                      required
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="firstName">
                  {({ field }: any) => (
                    <TextField
                      label="First Name"
                      required
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="lastName">
                  {({ field }: any) => (
                    <TextField
                      label="Last Name"
                      required
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="username">
                  {({ field }: any) => (
                    <TextField
                      label="Username"
                      required
                      error={touched.username && Boolean(errors.username)}
                      helperText={touched.username && errors.username}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="acceptTerms">
                  {({ field }: any) => (
                    <Box>
                      <label>
                        <input type="checkbox" {...field} /> Accept Terms
                      </label>
                      {touched.acceptTerms && errors.acceptTerms && (
                        <Typography color="error" variant="caption">
                          {errors.acceptTerms}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Field>
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Sign Up
                </Button>
                {status?.error && <Alert severity="error">{status.error}</Alert>}
                {status?.success && <Alert severity="success">{status.success}</Alert>}
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthPageTemplate>
  );
}
