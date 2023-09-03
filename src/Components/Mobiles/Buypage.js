import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const mobileValidationSchema = yup.object({
  name: yup.string().required("Name field cant be empty"),

  phone: yup
    .number()
    .required("Phone field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  address: yup
    .string()
    .required("Address field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  district: yup.string().required("District field cant be empty"),

  state: yup.string().required("State field cant be empty"),
});

export default function Buypage({ mode, setMode }) {
  const navigate = useNavigate();
  let [ purchased, setPurchased ] = useState(true);
  console.log(purchased);

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        address: "",
        district: "",
        state: "",
      },
      validationSchema: mobileValidationSchema,

      onSubmit: (buy) => {
        console.log("Form Values Are", buy);
        // buy(buy);
      },
    });

  //   const buy = async (newMovies) => {
  //     let { name, poster, rating, summary, trailer } = newMovies;
  //     let payload = { name, poster, rating, summary, trailer };
  //     console.log("this is PAYLOAD", payload);
  //     try {
  //       let res = await axios.post(`${url}/movies/addMovieReview`, payload);
  //       console.log(res);
  //       toast.success(res.data.message);
  //     } catch (err) {
  //       toast.error(err.response.data.message);
  //     }
  //   };

  return (
    <div className="Buypage">
      <Navbar mode={mode} setMode={setMode} />
      <div className="buy-div-outer">
        {purchased ? (
          <div className="buy-pur-div">
            <h3 className="buy-pur-title">Mobile Ordered Successfully 🎉✨</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="buy-div">
            <h1 className="buy-title">Enter Your Address</h1>
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              value={values.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name ? errors.name : null}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Phone Number"
              variant="outlined"
              value={values.phone}
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && errors.phone}
              helperText={touched.phone && errors.phone ? errors.phone : null}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Address"
              variant="outlined"
              value={values.address}
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && errors.address}
              helperText={
                touched.address && errors.address ? errors.address : null
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Your District"
              variant="outlined"
              value={values.district}
              name="district"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.district && errors.district}
              helperText={
                touched.district && errors.district ? errors.district : null
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Your State"
              variant="outlined"
              value={values.state}
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.state && errors.state}
              helperText={touched.state && errors.state ? errors.state : null}
            />
            <Button
              className="buy-button"
              style={{ backgroundColor: mode ? "#ff9c07" : "White" }}
              variant="contained"
              onClick={() => navigate("/mobiles/buy")}
              type="submit"
            >
              Buy
            </Button>
          </form>
        )}
      </div>
      <Footer mode={mode} />
    </div>
  );
}
