import React from "react";
import classes from "./ContactUs.module.scss";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { HTTP_CLIENT } from "../../../utils/config";
import { ENDPOINTS } from "../../../utils/helpers";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is Required !"),
      fullName: yup.string().required("Name is Required !"),
      message: yup.string().required("Required !"),
    }),
    onSubmit: (values: any) => {
      const params = {
        full_name: values.fullName,
        email: values.email,
        message: values.message
      }
      HTTP_CLIENT.post(ENDPOINTS.SENDFEEDBACK, params).then((res) => {
        console.log(res);
        formik.resetForm()
      }).catch(() => { })
    },
  });
  return (
    <div className={classes.maincontainer}>
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
            {formik.errors.fullName && formik.touched.fullName && (
              <p>{formik.errors.fullName}</p>
            )}
            <input
              type="text"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
            <textarea
              rows={3}
              placeholder="Your Message"
              value={formik.values.message}
              onChange={formik.handleChange("message")}
              onBlur={formik.handleBlur("message")}
            />
            {formik.errors.message && formik.touched.message && (
              <p>{formik.errors.message}</p>
            )}
          </div>
          <Button type="submit" className={classes.submit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
