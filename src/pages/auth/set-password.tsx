import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { AuthService } from '@/domain/services/AuthService';
import { PasswordReset, PasswordResetValidator } from '@/domain/validators/auth';
import { Formik, Form, Field } from 'formik';
import AuthPageTemplate from '@/components/templates/AuthPageTemplate';
import { ZodError } from 'zod';

const authService = new AuthService();

export default function SetPasswordPage() {
  return (
    <AuthPageTemplate>
      <Box sx={{ maxWidth: 500, width: 1, mx: 'auto', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Set New Password
        </Typography>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          validateOnMount={false}
          initialValues={{ token: '12312', password: '', confirmPassword: '' }}
          validate={values => {
            try {
              console.log('validating form');
              PasswordResetValidator.parse(values);
              return {};
            } catch (err: any) {
              if (err instanceof ZodError) {
                console.log(err.flatten());
                const errors: Record<string, string> = {};

                if (err.issues) {
                  err.issues.forEach((e: any) => {
                    if (e.path && e.path[0]) errors[e.path[0]] = e.message;
                  });
                }
                return errors;
              }
            }
          }}
          onSubmit={async (values, { setSubmitting, setStatus, resetForm, validateForm }) => {
            console.log(values);
            const errors = await validateForm(values);
            console.log(errors);
            setStatus(null);
            try {
              await authService.setPassword(values as PasswordReset);
              setStatus({ success: 'Password has been reset!' });
              resetForm();
            } catch (err: any) {
              setStatus({ error: err.message || 'Reset failed' });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched, status }) => (
            <Form>
              <Stack spacing={2}>
                <Field name="password">
                  {({ field }: any) => (
                    <TextField
                      label="New Password"
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
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Set Password
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
