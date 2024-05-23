/**
 * `handleAsyncError` handles asynchronous errors and updates the state with the error message.
 *
 * @function
 * @param {any} error - The error object caught from an async operation.
 * @param {function} set - The state setter function to update the state with the error information.
 * @returns {{ success: false; error: string }} An object indicating the failure and the error message.
 *
 * @example
 * try {
 *   // Some async operation
 * } catch (error) {
 *   const result = handleAsyncError(error, setState);
 *   console.log(result.error);
 * }
 *
 * @remarks
 * This function extracts the error message from the error response, if available,
 * and updates the state to reflect that an error has occurred. It returns an object
 * with `success: false` and the error message for further handling if needed.
 */
export const handleAsyncError = (error: any, set: any): { success: false; error: string } => {
  // Extract the error message from the error response, falling back to a default message if not available
  const errorMessage = error.response?.data?.message.message || 'An error occurred';

  // Update the state to indicate loading has finished and set the error message
  set({ loading: false, error: errorMessage });

  // Return an object indicating the failure and the error message
  return { success: false, error: errorMessage };
};
