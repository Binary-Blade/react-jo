import { LoginFormData } from "@/validation/schemas/loginSchema";
import { SignupFormData } from "@/validation/schemas/signupSchema";

export interface UserSignupData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

export interface SignUpFormProps {
    onSubmit: (data: SignupFormData) => void | Promise<void>;
}

export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void | Promise<void>;
    disabled?: boolean;
}

