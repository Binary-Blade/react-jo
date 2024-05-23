/**
 * `UserSignupData` defines the structure of user signup data.
 * It includes properties for the user's email, password, first name, and last name.
 *
 * @interface UserSignupData
 * @property {string} email - The email address of the user.
 * @property {string} password - The password chosen by the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 *
 * @example
 * const signupData: UserSignupData = {
 *   email: 'user@example.com',
 *   password: 'securepassword',
 *   firstName: 'John',
 *   lastName: 'Doe'
 * };
 *
 * @remarks
 * This interface is used to type the user signup data, ensuring it contains the necessary details
 * for creating a new user account within the application.
 */
export interface UserSignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

/**
 * `UserLoginData` defines the structure of user login data.
 * It includes properties for the user's email and password.
 *
 * @interface UserLoginData
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 *
 * @example
 * const loginData: UserLoginData = {
 *   email: 'user@example.com',
 *   password: 'securepassword'
 * };
 *
 * @remarks
 * This interface is used to type the user login data, ensuring it contains the necessary details
 * for authenticating a user within the application.
 */
export interface UserLoginData {
  email: string;
  password: string;
}

/**
 * `FormErrors` defines the structure of form errors.
 * It includes properties for the form field names and the corresponding error messages.
 *
 * @interface FormErrors
 * @property {string[]} [key] - The form field name.
 * @property {string[]} [value] - The error messages for the form field.
 * @example
 * const errors: FormErrors = {
 *  email: ['Email is required', 'Email must be a valid email address'],
 *  password: ['Password is required', 'Password must be at least 8 characters long']
 *  };
 *  @remarks
 *  This interface is used to type form errors, ensuring they contain the necessary details
 *  for displaying error messages to the user when form validation fails.
 *  */
export interface FormErrors {
  [key: string]: string[] | undefined;
}
