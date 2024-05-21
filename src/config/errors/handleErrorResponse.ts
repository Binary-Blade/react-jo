export const handleAsyncError = (error: any, set: any): { success: false; error: string } => {
  const errorMessage = error.response?.data?.message.message || 'An error occurred';
  set({ loading: false, error: errorMessage });
  return { success: false, error: errorMessage };
};
