/**
 * `Response` defines the shape of a general response object.
 * It includes properties for indicating success, a message, and an error.
 *
 * @interface Response
 * @property {boolean} success - Indicates if the response indicates a successful operation.
 * @property {string} [message] - Optional message included in the response.
 * @property {string} [error] - Optional error message included in the response.
 *
 * @example
 * const response: Response = {
 *   success: true,
 *   message: 'Operation completed successfully.'
 * };
 *
 * @remarks
 * This interface is used to type responses that provide a general indication of success
 * along with optional messages or errors.
 */
export interface GenericResponse {
  success: boolean;
  message?: string;
  error?: string;
}
