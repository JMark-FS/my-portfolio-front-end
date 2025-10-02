import { styled } from '@mui/material';
import { MaterialDesignContent } from 'notistack';
import Image from 'next/image';
export const SlydynToast = styled(MaterialDesignContent)(() => ({
  '&.notistack-snackbar': {
    gap: '10px',
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: '#F8FCFB',
    color: '#191414',
    fontSize: '16px',
    border: '1px solid #D6EBE7',
    paddingRight: '25px',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#FDF7F7',
    color: '#191414',
    fontSize: '16px',
    border: '1px solid #F4CDCD',
    paddingRight: '25px',
  },
}));

export const iconVariant = {
  success: (
    <Image
      src="/success.svg"
      style={{
        marginRight: '10px',
      }}
      width={30}
      height={30}
      alt="success"
    ></Image>
  ),
  error: (
    <Image
      style={{
        marginRight: '10px',
      }}
      src="/error.svg"
      width={30}
      height={30}
      alt="error"
    ></Image>
  ),
};
