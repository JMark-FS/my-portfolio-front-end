import { useState, useCallback } from 'react';

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface GenericStatus {
  status: Status;
  isIdle: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  setIdle: () => void;
  setLoading: () => void;
  setSuccess: () => void;
  setError: () => void;
}

export function useGenericStatus(initialStatus: Status = 'idle'): GenericStatus {
  const [status, setStatus] = useState<Status>(initialStatus);

  const setIdle = useCallback(() => setStatus('idle'), []);
  const setLoading = useCallback(() => setStatus('loading'), []);
  const setSuccess = useCallback(() => setStatus('success'), []);
  const setError = useCallback(() => setStatus('error'), []);

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return {
    status,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    setIdle,
    setLoading,
    setSuccess,
    setError,
  };
}
