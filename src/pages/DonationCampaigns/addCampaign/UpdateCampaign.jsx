import { useLoaderData } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import * as yup from "yup";

import PetsIcon from "@mui/icons-material/Pets";
import { toast } from "react-toastify";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DashBoardTittle from "../../dashboard/DashBoardTittle";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import { useState } from "react";
import moment from "moment";

const validationSchema = yup.object({
  max_amount: yup
    .number("valid Donation Amount ")
    .required("Donation Amount is required"),
  short_description: yup
    .string("Enter Short description")
    .required("Short description is required"),
  name: yup.string("Enter pet name").required("Pet Name is required"),
  image: yup.string("Image pet name").required("Pet Image is required"),
  long_description: yup
    .string("Enter Long description")
    .required("Long description is required"),
});

const UpdateCampaign = () => {
  let data = useLoaderData().data;
  let [endDate, setEndDate] = useState(moment(data?.campaignEndDate)||null);
  let AxiosCustomSecure = useAxiosIntercepter();
  let handleChangeDate = (e) => {
    if (!moment(e).isAfter(new Date())) {
      return toast.error("Select Valid Date");
    }
    setEndDate(e);
  };

if(!data){
    return ( new Error)
}


  const formik = useFormik({
    initialValues: {
      image: data.image,
      name: data.name||'',
      max_amount: data.max_amount,
      short_description: data.short_description,
      long_description: data.long_description,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (!moment(endDate).isAfter(new Date())) {
        return toast.error("Select Valid Date");
      }

      try {
        AxiosCustomSecure.patch(`/api/donation_campaign/update/${data._id}`, {
          ...values,
          campaignEndDate: endDate,
        }).then((data) => {
          if (data?.data) {
            toast.success("Update Successfully");
         
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Container>
      <DashBoardTittle tittle="Add A Pet"></DashBoardTittle>

      <Grid
        sx={{
          paddingY: 2,
          display: "grid",
          marginX: "auto",
          justifyContent: "center",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              value={endDate}
              onChange={(newValue) => handleChangeDate(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <form onSubmit={formik.handleSubmit}>
        <Grid sx={{ display: "grid", gap: "7px", maxWidth: "800px" }}>
        <TextField
            fullWidth
            id="image"
            name="image"
            label="Pet Image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Pet Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            id="max_amount"
            name="max_amount"
            label="Donation Target"
            value={formik.values.max_amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.max_amount && Boolean(formik.errors.max_amount)
            }
            helperText={formik.touched.max_amount && formik.errors.max_amount}
          />

          <TextField
            fullWidth
            id="short_description"
            name="short_description"
            label="Short Description"
            value={formik.values.short_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.short_description &&
              Boolean(formik.errors.short_description)
            }
            helperText={
              formik.touched.short_description &&
              formik.errors.short_description
            }
          />
          <TextField
            fullWidth
            id="long_description"
            name="long_description"
            label="Long Description"
            value={formik.values.long_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.long_description &&
              Boolean(formik.errors.long_description)
            }
            helperText={
              formik.touched.long_description && formik.errors.long_description
            }
          />

          <Button
            color="button"
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            <PetsIcon></PetsIcon>Add Campaign
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdateCampaign;
