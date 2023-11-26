import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import useTranslationSetup from "./../../hooks/useTranslationSetup";
import * as Yup from "yup";


const ContactForm = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const theme = useTheme();
  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const { t } = useTranslationSetup();
  
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: 
    Yup.object().shape({
      fullname: Yup.string().required(t("name-req")),
      email: Yup.string()
          .email(t("email.valid"))
          .required(t("email-req")),
      subject: Yup.string().required(t("title-req")),
      message: Yup.string().required(t("message-req")),
      recaptcha: Yup.string().required(t("captcha-req")),
  })
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container>
          <Grid xs={12} sx={{ direction: "ltr" }}>
            <Grid container spacing={5}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label={t("nameForm")}
                name="fullname"
                variant="outlined"
                helperText={
                  formik.touched.fullname ? formik.errors.fullname : null
                }
                error={Boolean(
                  formik.touched.fullname && formik.errors.fullname
                )}
                value={formik.values?.fullname}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Face6Rounded />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 2 }}
              />

              <TextField
                fullWidth
                size="small"
                color="warning"
                label={t("email")}
                name="email"
                variant="outlined"
                helperText={formik.touched.email ? formik.errors.email : null}
                error={Boolean(formik.touched.email && formik.errors.email)}
                value={formik.values?.email}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailRounded />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 2 }}
              />

              <TextField
                fullWidth
                size="small"
                color="warning"
                label={t("title")}
                name="subject"
                variant="outlined"
                helperText={
                  formik.touched.subject ? formik.errors.subject : null
                }
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subject}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SubjectRounded />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 2 }}
              />

              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                label={t("message")}
                name="message"
                variant="outlined"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
                sx={{ m: 2 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          alignItems: "end",
          flexDirection: "column",
        }}
      >
        <Box sx={{ m: 0.75 }}>
          <ReCAPTCHA
            sitekey={siteKey}
            theme={theme.palette.mode}
            hl="fa"
            onChange={(value) => {
              formik.setFieldValue("recaptcha", value);
            }}
          />
        </Box>
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          {t("send")}
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
