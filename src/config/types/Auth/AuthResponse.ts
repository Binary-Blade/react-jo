// Define the shape of the success response with a message
export interface SuccessResponse {
  success: boolean;
  message?: string;
}

// Define the shape of the login response
export interface LoginResponse {
  success: boolean;
  data: {
    accessToken: string;
    userId: number;
  };
}

// Define the shape of the token response
export interface TokenResponse {
  accessToken: string;
  userId: number;
}

// Define a generic response type for other responses
export interface GenericResponse {
  success: boolean;
  message?: string;
}
