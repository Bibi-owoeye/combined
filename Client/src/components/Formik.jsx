import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is Required"),
      password: yup
        .string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password must be at least 8 characters long and contain at least one number"
        )
        .required("Password is Required"),
      firstName: yup
        .string()
        .min(2, "First name must be at least 2 characters")
        .required("FirstName is Required"),
      lastName: yup
        .string()
        .min(2, "Last name must be at least 2 characters")
        .required("Lastname is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <form
        className="mx-auto w-50 p-2 d-block shadow px-5"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-decoration-underline text-center text-success">
          FORMIK FORM
        </h1>
        <div className="mx-auto ">
          <label htmlFor="" className=" fw-bold d-block">
            FirstName
          </label>
          <input
            className="border border-gray-300 rounded p-1 outline-none w-100 form-control shadow-none"
            type="text"
            placeholder="Enter your firstname"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <div className="text-danger">{formik.touched.password &&formik.errors.firstName}</div>
        </div>
        <div className="mx-auto">
          <label htmlFor="" className="fw-bold d-block">
            LastName
          </label>
          <input
            className="border border-gray-300 rounded p-1 outline-none w-100 form-control shadow-none"
            type="text"
            placeholder="Enter your lastname"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <div className="text-danger">{formik.touched.password &&formik.errors.lastName}</div>
        </div>
        <div className="mx-auto ">
          <label htmlFor="" className="fw-bold text-xl  d-block">
            Email
          </label>
          <input
            className="border border-gray-300 rounded p-1 outline-none w-100 form-control shadow-none"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="text-danger">{formik.touched.password &&formik.errors.email}</div>
        </div>
        <div className="mx-auto">
          <label htmlFor="" className="fw-bold text-xl">
            Password
          </label>
          <input
            className="rounded p-1 border w-100 form-control shadow-none"
            type="text"
            placeholder="Enter your password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="text-danger">{formik.touched.password && formik.errors.password}</div>
        </div>
        <button
          className="d-block mx-auto mt-2 rounded p-1 btn btn-success w-75 my-3 fw-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formik;
