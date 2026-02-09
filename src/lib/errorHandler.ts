export function getSafeErrorMessage(error: any): string {
  console.error('Operation failed:', error);

  const errorCode = error?.code;
  const errorMessage = error?.message?.toLowerCase() || '';

  if (errorCode === '23505') return 'This record already exists.';
  if (errorCode === '23503') return 'Cannot perform this action due to related records.';
  if (errorMessage.includes('jwt')) return 'Your session has expired. Please sign in again.';
  if (errorMessage.includes('permission')) return 'You do not have permission to perform this action.';
  if (errorMessage.includes('invalid login')) return 'Invalid email or password. Please try again.';
  if (errorMessage.includes('email not confirmed')) return 'Please verify your email address before signing in.';
  if (errorMessage.includes('rate limit')) return 'Too many attempts. Please try again later.';

  return 'An error occurred. Please try again or contact support.';
}
