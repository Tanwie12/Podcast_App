import * as yup from 'yup';

// Regex pattern for password validation
const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const signupSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().matches(passwordRules, "Password must contain at least 5 characters, including one letter and one digit").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password is required")
});
