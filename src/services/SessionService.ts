import axiosClient from "@/config/axiosConfig";

export class SessionService {
  static async initializeSession() {
    try {
      const response = await axiosClient.get('/auth/refresh');
      return {
        accessToken: response.data.accessToken,
        expiresIn: response.data.expiresIn,
        userId: response.data.userId
      };
    } catch (error) {
      console.error('Verify session error:', error);
      return {
        isAuthenticated: false,
        accessToken: null,
        expiresAt: null
      };
    }
  }
}
