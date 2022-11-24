import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { registerFields, registerSchema } from "../common/schemas/register.validation";
import UserLayout from "../components/layouts/users/UserLayout";
import { registerUsersAction } from "../redux/actions/users.action";

function Register({ history }) {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    admin: false,
  });
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const formik = useFormik({
    initialValues: registerForm,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUsersAction(values));
      if (isAdmin) {
        history.push("/companies");
      }
    },
  });

  return (
    <div className="Register">
      <UserLayout title="Register">
        <form onSubmit={formik.handleSubmit}>
          {registerFields.map((field, index) => (
            field.type === "checkbox" ? (
                <FormControlLabel key={index}
                    control={
                        <Checkbox
                            id={field.name}
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formik.values[field.name]}
                            onChange={formik.handleChange}
                        />
                    }
                    label={field.placeholder}
                />
            ) : (
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
            )
          ))}
            <Button color="primary" variant="contained" fullWidth type="submit">
                Register
            </Button>
        </form>
      </UserLayout>
    </div>
  );
}

export default Register;
