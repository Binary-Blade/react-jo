/**
 * `UserRole` represents the different roles a user can have in the system.
 *
 * @enum {string}
 * @property {string} ADMIN - Role for administrative users with elevated permissions.
 * @property {string} USER - Role for regular users with standard permissions.
 *
 * @example
 * const userRole = UserRole.ADMIN;
 */
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
