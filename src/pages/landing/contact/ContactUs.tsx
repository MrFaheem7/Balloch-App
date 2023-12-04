import React from "react";
import classes from "./ContactUs.module.scss";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is required"),
      fullName: yup.string().required("Email is required"),
      message: yup.string().required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className={classes.title}>Get In Touch With Us</div>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange("fullName")}
            onBlur={formik.handleBlur("fullName")}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
          <input
            type="text"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          <textarea
            rows={3}
            placeholder="Your Message"
            value={formik.values.message}
            onChange={formik.handleChange("message")}
            onBlur={formik.handleBlur("message")}
          />
        </div>
        <Button type="submit" className={classes.submit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
