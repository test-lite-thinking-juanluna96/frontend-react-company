import * as yup from "yup";

const registerFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
  },
  {
    name: "admin",
    label: "Admin",
    type: "checkbox",
    placeholder: "Are you an admin?",
  },
];

const registerSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
  admin: yup.boolean("Are you an admin?").required("Are you an admin?"),
});

export { registerFields, registerSchema };

