import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useId, useState } from "react";

import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("This field is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("This field is required"),
  message: Yup.string()
    .min(5, "Too short")
    .max(256, "Too long")
    .required("This field is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();

  const nameErrorId = useId();
  const emailErrorId = useId();
  const msgErrorId = useId();

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values, actions) => {
    setIsSent(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setIsSent(true);

      actions.resetForm();
    } catch (error) {
      setIsError(true);
      console.log("EMAILJS ERROR:", error);
      console.log("STATUS:", error.status);
      console.log("TEXT:", error.text);
    }
  };

  return (
    <Formik
      className={css.form}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ isValid, dirty, isSubmitting, errors, touched }) => (
        <Form className={css.form__container}>
          <div className={css.field__container}>
            <label className={css.form__lable} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={`${css.input__box} ${errors.name && touched.name ? css.input__error : ""}`}
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Jane Appleseed"
              aria-describedby={nameErrorId}
              aria-invalid={errors.name && touched.name}
            />
            <ErrorMessage
              className={css.error__message}
              name="name"
              component="span"
              id={nameErrorId}
            />
          </div>

          <div className={css.field__container}>
            <label className={css.form__lable} htmlFor={emailFieldId}>
              Email Address
            </label>
            <Field
              className={`${css.input__box} ${errors.email && touched.email ? css.input__error : ""}`}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="email@example.com"
              aria-describedby={emailErrorId}
              aria-invalid={errors.name && touched.name}
            />
            <ErrorMessage
              className={css.error__message}
              name="email"
              component="span"
              id={emailErrorId}
            />
          </div>

          <div className={css.field__container}>
            <label className={css.form__lable} htmlFor={msgFieldId}>
              Message
            </label>
            <Field
              className={`${css.input__box} ${errors.message && touched.message ? css.input__error : ""}`}
              as="textarea"
              name="message"
              id={msgFieldId}
              rows="5"
              placeholder="How can I help?"
              aria-describedby={msgErrorId}
              aria-invalid={errors.name && touched.name}
            />
            <ErrorMessage
              className={css.error__message}
              name="message"
              component="span"
              id={msgErrorId}
            />
          </div>

          <button
            className="btn btn__primary"
            type="submit"
            disabled={!dirty || !isValid || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {isSent && (
            <p className={css.success__message}>Message sent successfully!</p>
          )}
          {isError && (
            <p className={css.error__message}>Oops... Something went wrong. </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
