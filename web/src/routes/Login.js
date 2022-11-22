import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { loginFields, loginSchema } from "../common/schemas/login.validation";
import UserLayout from "../components/layouts/users/UserLayout";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: loginForm,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="Login">
      <UserLayout title="Login">
        <form onSubmit={formik.handleSubmit}>
          {loginFields.map((field, index) => (
              <TextField
                key={index}
                fullWidth
                id={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
                sx={{ mb: 1 }}
              />
          ))}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Login
          </Button>
        </form>
      </UserLayout>
    </div>
  );
}

export default Login;
