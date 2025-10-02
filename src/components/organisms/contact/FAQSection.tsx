import { Paper, Typography, Stack, Box } from '@mui/material';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  faqs,
}: FAQSectionProps) {
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Stack spacing={2}>
        {faqs.map((faq, index) => (
          <Box key={index}>
            <Typography variant="h6" component="h3" gutterBottom>
              {faq.question}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {faq.answer}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
