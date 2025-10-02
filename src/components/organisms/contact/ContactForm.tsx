import { Paper, Typography, TextField, Button, Stack, Box, Alert } from '@mui/material';
import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  title?: string;
  onSubmit?: (data: ContactFormData) => Promise<boolean>;
  initialData?: Partial<ContactFormData>;
  submitButtonText?: string;
}

export default function ContactForm({
  title = 'Send me a message',
  onSubmit,
  initialData = {},
  submitButtonText = 'Send Message',
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    ...initialData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      let success = true;

      if (onSubmit) {
        success = await onSubmit(formData);
      } else {
        // Default simulation
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      if (success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>

      {submitStatus === 'success' && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          Thank you for your message! I'll get back to you soon.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          Something went wrong. Please try again or contact me directly.
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
              disabled={isSubmitting}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
              disabled={isSubmitting}
            />
          </Box>

          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            fullWidth
            disabled={isSubmitting}
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            fullWidth
            disabled={isSubmitting}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
          >
            {isSubmitting ? 'Sending...' : submitButtonText}
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
