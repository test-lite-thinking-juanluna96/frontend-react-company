import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { registerFields, registerSchema } from "../common/schemas/register.validation";
import UserLayout from "../components/layouts/users/UserLayout";

function Register() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    admin: false,
  });

  const formik = useFormik({
    initialValues: registerForm,
    validationSchema: registerSchema,
    onSubmit: (values) => {
        console.log("values", values);
      alert(JSON.stringify(values, null, 2));
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
