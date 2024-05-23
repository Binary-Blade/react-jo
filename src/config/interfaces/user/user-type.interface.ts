/**
 * `User` defines the structure of a user.
 * It includes properties for the user's ID, name, email, role, creation date, and total amount spent.
 *
 * @interface User
 * @property {number} id - The ID of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} role - The role of the user (e.g., 'admin', 'user').
 * @property {string} createdAt - The date and time when the user account was created.
 * @property {number} totalSpent - The total amount of money spent by the user.
 *
 * @example
 * const user: User = {
 *   id: 1,
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com',
 *   role: 'user',
 *   createdAt: '2023-01-01T00:00:00Z',
 *   totalSpent: 500.00
 * };
 *
 * @remarks
 * This interface is used to type user objects, ensuring they contain the necessary details
 * for managing user data within the application.
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
  totalSpent: number;
}
