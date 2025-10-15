import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { AuthService } from '@/domain/services/AuthService';
import { LoginCredentials, LoginCredentialsValidator } from '@/domain/validators/auth';
import { Formik, Form, Field } from 'formik';
import AuthPageTemplate from '@/components/templates/AuthPageTemplate';

const authService = new AuthService();

export default function SignInPage() {
  return (
    <AuthPageTemplate>
      <Box sx={{ mx: 'auto', maxWidth: '500px', width: 1 }}>
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            try {
              LoginCredentialsValidator.parse(values);
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
              await authService.signIn(values as LoginCredentials);
              setStatus({ success: 'Sign in successful!' });
              resetForm();
            } catch (err: any) {
              setStatus({ error: err.message || 'Sign in failed' });
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
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Sign In
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
