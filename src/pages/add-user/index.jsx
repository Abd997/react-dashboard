import { Box, Button, TextField, useMediaQuery } from "@mui/material"
import Header from "../../components/Header"
import { Formik } from "formik"
import * as yup from "yup"

export const AddUserPage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)")

  const handleFormSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box m="20px">
      <Header title="Add User" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                fullWidth
                variant="filled"
                type="text"
                label="first name"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                fullWidth
                variant="filled"
                type="text"
                label="last name"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                fullWidth
                variant="filled"
                type="text"
                label="Address one"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                fullWidth
                variant="filled"
                type="text"
                label="Address two"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create new user
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().required("required"),
  contact: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
})

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
}