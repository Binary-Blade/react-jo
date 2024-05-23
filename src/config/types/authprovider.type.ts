import { ReactNode } from 'react';

/**
 * `AuthProviderProps` defines the properties for the authentication provider component.
 * It includes the `children` prop which represents the nested components.
 *
 * @type AuthProviderProps
 * @property {ReactNode} children - The child components to be wrapped by the authentication provider.
 *
 * @example
 * const authProviderProps: AuthProviderProps = {
 *   children: <MyComponent />
 * };
 *
 * @remarks
 * This type is used to ensure the authentication provider component receives the necessary props,
 * specifically the child components that it will render.
 */
export type AuthProviderProps = {
  children: ReactNode;
};
