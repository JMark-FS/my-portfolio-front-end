import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { AuthService } from '@/domain/services/AuthService';
import { PasswordResetRequest, PasswordResetRequestValidator } from '@/domain/validators/auth';
import { Formik, Form, Field } from 'formik';
import AuthPageTemplate from '@/components/templates/AuthPageTemplate';

const authService = new AuthService();

export default function ForgotPasswordPage() {
  return (
    <AuthPageTemplate>
      <Box sx={{ maxWidth: 500, width: 1, mx: 'auto', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        <Formik
          initialValues={{ email: '' }}
          validate={values => {
            try {
              PasswordResetRequestValidator.parse(values);
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
              await authService.forgotPassword(values as PasswordResetRequest);
              setStatus({ success: 'Password reset email sent!' });
              resetForm();
            } catch (err: any) {
              setStatus({ error: err.message || 'Request failed' });
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
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Send Reset Link
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
