import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Paper
} from "@mui/material";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, touched, errors }) => (
          <Form autoComplete="off">
            <Stack spacing={2}>
              <TextField
                label="Username"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                fullWidth
              />

              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}