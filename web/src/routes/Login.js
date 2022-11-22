import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginFields, loginSchema } from "../common/schemas/login.validation";
import UserLayout from "../components/layouts/users/UserLayout";
import { loginUsersAction } from './../redux/actions/users.action';

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: loginForm,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUsersAction(values));
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
          {
            error && 
            <Typography
              color="error"
              variant="body2"
              sx={{ mb: 1 }}
            >
              {error}
            </Typography>
          }
          <Button color="primary" variant="contained" fullWidth type="submit">
            Login
          </Button>
        </form>
      </UserLayout>
    </div>
  );
}

export default Login;
